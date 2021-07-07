import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ModalItem from './ModalItem';
import ModalSearch from './ModalSearch';
import { useDispatch } from 'react-redux';
import { Actions } from '../../store/actions';

function Modal() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: Actions.GET_MODAL_PRODUCTS });
  }, []);

  const modalShowingProducts = useTypedSelector(
    (state) => state.productsReducer.modal_showing_products
  );

  const modalProducts = useTypedSelector(
    (state) => state.productsReducer.modal_products
  );

  return (
    <section className='modal-container'>
      <div className='modal'>
        {modalProducts.length > 3 && <ModalSearch />}
        {modalShowingProducts.map((item) => {
          return (
            <ModalItem
              imageUrl={item.imageUrl}
              title={item.title}
              id={item.id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Modal;

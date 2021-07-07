import React from 'react';
import { useTypedSelector } from '../..//hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { Actions } from '../../store/actions';

function ModalOverlay() {
  const dispatch = useDispatch();
  const modalOpen = useTypedSelector(
    (state) => state.productsReducer.modal_open
  );

  const closeModal = () => {
    dispatch({ type: Actions.CLOSE_MODAL });
  };

  return (
    <div
      className={`${modalOpen ? 'overlay overlay-open' : 'overlay'}`}
      onClick={() => closeModal()}
    ></div>
  );
}

export default ModalOverlay;

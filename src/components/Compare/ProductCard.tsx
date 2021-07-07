import React from 'react';
import ModalButton from './ModalButton';
import Modal from '../Modal/Modal';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface CardProps {
  title: string;
  imageUrl: string;
  id: string;
}

function ProductCard({ title, imageUrl, id }: CardProps) {
  const isModalOpen = useTypedSelector(
    (state) => state.productsReducer.modal_open
  );
  const modalId = useTypedSelector((state) => state.productsReducer.modal_id);

  const showingProducts = useTypedSelector(
    (state) => state.productsReducer.showing_products
  );

  const products = useTypedSelector((state) => state.productsReducer.products);

  return (
    <section className='smartphone-container'>
      <div className='smartphone'>
        <div className='product-image-container'>
          <img className='product-image' src={imageUrl} alt='' />
        </div>
        <span className='product-title'>{title}</span>
        {products.length > showingProducts.length && <ModalButton id={id} />}
        {isModalOpen && modalId === id && <Modal />}
      </div>
    </section>
  );
}

export default ProductCard;

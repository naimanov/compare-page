import React from 'react';
import ProductCard from './ProductCard';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ChangeAmount from './ChangeAmount';
import FilterTable from './FilterTable';

function Compare() {
  const showingProducts = useTypedSelector(
    (state) => state.productsReducer.showing_products
  );
  const amount = useTypedSelector(
    (state) => state.productsReducer.products_amount
  );
  const products = useTypedSelector((state) => state.productsReducer.products);
  const arrRadio = [2, 3, 4, 5, 6].slice(0, products.length - 1);

  return (
    <section className='wrapper'>
      <div className='compare-container'>
        <div className='compare-header'>
          <h1 className='page-title'>Смартфоны</h1>
          <ChangeAmount arrRadio={arrRadio} amount={amount} />
        </div>
        <section className='product-container'>
          <FilterTable />
          {showingProducts.map((product) => {
            return (
              <ProductCard
                title={product.title}
                imageUrl={product.imageUrl}
                id={product.id}
                key={product.id}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
}

export default Compare;

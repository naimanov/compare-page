import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import TableRow from './TableRow';
import { Actions } from '../../store/actions';

function CompareTable() {
  const dispatch = useDispatch();

  const tableProducts = useTypedSelector(
    (state) => state.productsReducer.table_products
  );
  const showingProducts = useTypedSelector(
    (state) => state.productsReducer.showing_products
  );
  const filter = useTypedSelector(
    (state) => state.productsReducer.table_filter
  );

  useEffect(() => {
    dispatch({ type: Actions.GET_TABLE_DATA });
  }, [showingProducts, filter]);

  return (
    <section className='table-container'>
      <div className='table wrapper'>
        {tableProducts.map((product) => {
          return (
            <TableRow
              title={product.title}
              items={product.items}
              key={product.title}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CompareTable;

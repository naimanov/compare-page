import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../../store/actions';
import CheckMark from '../Icons/CheckMark';

function FilterTable() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(false);

  const handleFilter = (filter: boolean) => {
    setFilter(filter);
    dispatch({ type: Actions.SET_TABLE_FILTER, payload: filter });
  };

  return (
    <section className='checkbox-container'>
      <form>
        <label htmlFor='tableFilter' className='checkbox-label'>
          <input
            type='checkbox'
            id='tableFilter'
            name='tableFilter'
            checked={filter}
            onChange={() => handleFilter(!filter)}
            className='form-checkbox'
          />
          <div className='custom-form-checkbox'>
            {filter && (
              <div>
                <CheckMark />
              </div>
            )}
          </div>
          <span>Показать различия</span>
        </label>
      </form>
    </section>
  );
}

export default FilterTable;

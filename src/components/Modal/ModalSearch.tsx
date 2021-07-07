import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../../store/actions';

function ModalSearch() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    dispatch({ type: Actions.SEARCH, payload: e.target.value });
  };

  return (
    <form className='serch-form'>
      <input
        type='text'
        className='search'
        value={searchText}
        onChange={(e) => handleSearch(e)}
      />
    </form>
  );
}

export default ModalSearch;

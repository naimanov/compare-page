import React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../../store/actions';
import ReplaceIcon from '../../components/Icons/ReplaceIcon';

interface ModalItemProps {
  imageUrl: string;
  title: string;
  id: number;
}
function ModalItem({ imageUrl, title, id }: ModalItemProps) {
  const dispatch = useDispatch();
  const replaceItem = (id: number) => {
    dispatch({ type: Actions.REPLACE_ITEM, payload: id });
  };

  return (
    <div className='modal-item'>
      <button className='change-item-button' onClick={() => replaceItem(id)}>
        <ReplaceIcon />
      </button>
      <div className='modal-item-image-container'>
        <img className='modal-item-image' src={imageUrl} alt='' />
      </div>

      <span>{title}</span>
    </div>
  );
}

export default ModalItem;

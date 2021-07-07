import React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../../store/actions';
import ChevronDown from '../../components/Icons/ChevronDown';

interface ModalbuttonProps {
  id: string;
}

function ModalButton({ id }: ModalbuttonProps) {
  const dispatch = useDispatch();
  const openModal = (id: string) => {
    dispatch({ type: Actions.OPEN_MODAL, payload: id });
  };

  return (
    <button className='modal-button' onClick={() => openModal(id)}>
      <ChevronDown />
    </button>
  );
}

export default ModalButton;

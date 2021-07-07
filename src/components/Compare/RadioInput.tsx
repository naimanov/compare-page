import React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../../store/actions';

interface RadioProps {
  value: number;
  amount: number;
}
function RadioInput({ value, amount }: RadioProps) {
  const dispatch = useDispatch();
  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: Actions.CHANGE_AMOUNT, payload: +e.target.value });
  };
  return (
    <>
      <label htmlFor={'radio' + value}>
        <span
          className={
            value === amount ? 'radio-label radio-checked' : 'radio-label'
          }
        >
          {value}
        </span>
      </label>
      <input
        className='radio-amount'
        id={'radio' + value}
        type='radio'
        value={value}
        name='amount'
        onChange={(e) => handleRadio(e)}
        checked={value === amount}
      />
    </>
  );
}

export default RadioInput;

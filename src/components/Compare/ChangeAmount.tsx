import React from 'react';
import RadioInput from './RadioInput';

interface ChangeAmountProps {
  arrRadio: any[];
  amount: number;
}
function ChangeAmount({ arrRadio, amount }: ChangeAmountProps) {
  return (
    <form className='amount-form'>
      <span>Отобразить товары: </span>
      {arrRadio.map((radio) => {
        return <RadioInput value={radio} amount={amount} key={radio} />;
      })}
    </form>
  );
}

export default ChangeAmount;

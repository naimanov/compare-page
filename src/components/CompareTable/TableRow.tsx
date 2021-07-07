import React from 'react';
import NoIcon from '../Icons/NoIcon';
import YesIcon from '../Icons/YesIcon';

interface TableRowProps {
  title: string;
  items: [];
}

function TableRow({ title, items }: TableRowProps) {
  return (
    <div className='table-row'>
      <div className='table-cell table-head'>
        <span>{title}</span>
      </div>
      {items.map((item, index) => {
        if (typeof item !== 'boolean') {
          return (
            <div className='table-cell' key={`${index}${item}${title}`}>
              {item}{' '}
            </div>
          );
        } else {
          return item ? (
            <div key={`${index}${item}${title}`} className='table-cell'>
              <YesIcon />
            </div>
          ) : (
            <div key={`${index}${item}${title}`} className='table-cell'>
              <NoIcon />{' '}
            </div>
          );
        }
      })}
    </div>
  );
}

export default TableRow;

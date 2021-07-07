import React from 'react';
import ProfileIcon from '../Icons/ProfileIcon';

function Navbar() {
  return (
    <header>
      <div className='wrapper navbar-conteiner'>
        <span className='header-title'>Каталог</span>
        <nav>
          <ul>
            <li>
              <a href=''>СРАВНЕНИЕ</a>
            </li>
            <li>
              <a href=''>Личный кабинет</a>
            </li>
            <li>
              <ProfileIcon />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

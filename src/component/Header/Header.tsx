import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <button className='button-40'>Домашняя страница</button>
      <button className='button-40'>О нас</button>
      <button className='button-40'>Отзывы</button>
    </header>
  );
};

export default Header;
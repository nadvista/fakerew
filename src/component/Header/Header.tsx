import React from 'react';
import './Header.css';
import description from '../ProductsDescription/ProductsDescription'


const scrollById = (id) => {
  var elemPos = document.getElementById(id)?.getBoundingClientRect().top;
  if(elemPos == undefined)
    elemPos = 0;

  var header = document.getElementById('header');

  var headerOffset = header?.getBoundingClientRect().height
  if(headerOffset == undefined)
    headerOffset = 0;

  var offset = elemPos - headerOffset - 20 + window.pageYOffset;

  window.scrollTo({top: offset, behavior:'smooth'})
}

const scrollToHome = () => {
  window.scrollTo({top: 0, behavior:'smooth'})
}

const Header: React.FC = () => {
  return (
    <header className="header" id='header'>
      <button className='button-40' onClick={scrollToHome}>Домашняя страница</button>
      <button className='button-40' onClick={() => scrollById('descriptionStart')}>О нас</button>
      <button className='button-40' onClick={() => scrollById('catalog')}>Каталог</button>
      <button className='button-40'>Отзывы</button>
    </header>
  );
};

export default Header;
import React from 'react';
import styles from './Header.module.css';
import description from '../ProductsDescription/ProductsDescription'
import SimpleButton from '../SimpleButton/SimpleButton';
import { useNavigate } from 'react-router-dom';

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
    <header className={styles.header} id='header'>
      <SimpleButton text='Домашняя страница' onclick={scrollToHome} />
      <SimpleButton text='О нас' onclick={() => scrollById('descriptionStart')} />
      <SimpleButton text='Тарифы' onclick={() => scrollById('catalog')} />
      <SimpleButton text='Калькулятор стоимости' onclick={() => {}} />
      <SimpleButton text='Отзывы' onclick={() => {}} />
    </header>
  );
};

export default Header;
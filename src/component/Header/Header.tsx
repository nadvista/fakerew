import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import SimpleButton from '../SimpleButton/SimpleButton';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [scrollToId, setScrollToId] = useState<string | null>(null);

  const scrollById = (id) => {
    if(id === 'home')
    {
      window.scrollTo({top: 0, behavior:'smooth'});
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      const elemPos = elem.getBoundingClientRect().top;
      const header = document.getElementById('header');
      const headerOffset = header ? header.getBoundingClientRect().height : 0;
      const offset = elemPos - headerOffset - 20 + window.pageYOffset;

      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };
  
  const navigateHomeAndScroll = (id) => {
    if(location.pathname === '/home')
      scrollById(id);
    else  {
      setScrollToId(id);
      navigate('/home');
    }
  };

  useEffect(() => {
    if(scrollToId && location.pathname === '/home') {
      scrollById(scrollToId);
      setScrollToId(null);
    }
  }, [location, scrollToId]);

  return (
    <header className={styles.header} id='header'>
      <SimpleButton text='Домашняя страница' onclick={() => {navigateHomeAndScroll('home')}} />
      <SimpleButton text='О нас' onclick={() => navigateHomeAndScroll('descriptionStart')} />
      <SimpleButton text='Тарифы' onclick={() => navigateHomeAndScroll('catalog')} />
      <SimpleButton text='Калькулятор стоимости' onclick={() => {}} />
      <SimpleButton text='Отзывы' onclick={() => {}} />
    </header>
  );
};

export default Header;
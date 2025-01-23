import React from 'react';
import styles from './SimpleButton.module.css';

interface SimpleButtonProps {
    text: string;
    onclick: () => void;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({text, onclick}) => {
  return (
    <button className={styles.button} onClick={onclick}>{text}</button>
  );
};

export default SimpleButton;
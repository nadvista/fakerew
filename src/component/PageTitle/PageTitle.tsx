import React from 'react';
import styles from './PageTitle.module.css';

interface PageTitleProps {
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({text}) => {
  return (
    <div className={styles.page_title}>
        <div className={styles.page_title_label}> {text} </div>
    </div>
  );
};

export default PageTitle;
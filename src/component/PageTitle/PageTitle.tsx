import React from 'react';
import styles from './PageTitle.module.css';

const PageTitle: React.FC = () => {
  return (
    <div className={styles.page_title}>
        <div className={styles.page_title_label}> Фальшивые отзывы </div>
    </div>
  );
};

export default PageTitle;
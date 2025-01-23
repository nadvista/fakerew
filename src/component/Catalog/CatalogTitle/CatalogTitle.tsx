import React from 'react';
import styles from './CatalogTitle.module.css';

const CatalogTitle: React.FC = () => {
  return (
    <div className={styles.catalog_title}>
      <h1>Тарифы</h1>
    </div>
  );
};

export default CatalogTitle;
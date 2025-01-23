import React from 'react';
import styles from './Catalog.module.css';
import CatalogGrid from '../CatalogGrid/CatalogGrid';
import CatalogTitle from '../CatalogTitle/CatalogTitle';

const Catalog: React.FC = () => {
  return (
    <div className={styles.catalog} id = 'catalog'>
        <CatalogTitle />
        <CatalogGrid />
    </div>
  );
};

export default Catalog;
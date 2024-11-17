import React from 'react';
import './Catalog.css';
import CatalogGrid from '../CatalogGrid/CatalogGrid';
import CatalogTitle from '../CatalogTitle/CatalogTitle';

const Catalog: React.FC = () => {
  return (
    <div className='catalog'>
        <CatalogTitle />
        <CatalogGrid />
    </div>
  );
};

export default Catalog;
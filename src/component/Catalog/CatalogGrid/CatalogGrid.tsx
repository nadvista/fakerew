import React from 'react';
import CatalogColumn from '../CatalogColumn/CatalogColumn';
import './CatalogGrid.css';

const CatalogGrid: React.FC = () => {
  return (
    <div className="catalog-grid">
      <CatalogColumn />
      <CatalogColumn />
      <CatalogColumn />
    </div>
  );
};

export default CatalogGrid;
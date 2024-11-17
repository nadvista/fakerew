import React from 'react';
import './CatalogColumn.css';
import '../../Header/Header.css';
const CatalogColumn: React.FC = () => {
  return (
    <div className="catalog-column">
      <div className="catalog-column-title">Описание товара</div> {/* Title block */}
      <span>
        <div className="catalog-item">Опция 1</div>
        <div className="catalog-item">Опция 2</div>
        <div className="catalog-item">Опция 3</div>
        <div className="catalog-item">Опция 4</div>
        <div className="catalog-item">Опция 5</div>
      </span>
      <button className='button-40'>Заказать</button>
    </div>
  );
};

export default CatalogColumn;
import React from 'react';
import './CatalogColumn.css';
import '../../Header/Header.css';

interface ProductData {
  title : string;
  options : Array<string>;
}

const CatalogColumn: React.FC<ProductData> = ({title, options}) => {
  return (
    <div className="catalog-column">
      <div className="catalog-column-title">{title}</div> {/* Title block */}
      <span>
        {
          options.map(e => <div className="catalog-item">{e}</div>)
        }
      <button className='button-40'>Заказать</button>
      </span>
    </div>
  );
};

export default CatalogColumn;
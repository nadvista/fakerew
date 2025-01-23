import React from 'react';
import styles from './CatalogColumn.module.css';
import '../../SimpleButton/SimpleButton'
import SimpleButton from '../../SimpleButton/SimpleButton';
interface ProductData {
  title : string;
  options : Array<string>;
}

const CatalogColumn: React.FC<ProductData> = ({title, options}) => {
  return (
    <div className={styles.catalog_column}>
      <div className={styles.catalog_column_title}>{title}</div> {/* Title block */}
      <span>
        {
          options.map(e => <div className={styles.catalog_item}>{e}</div>)
        }
      <SimpleButton text='Заказать' onclick={() => {}} />
      </span>
    </div>
  );
};

export default CatalogColumn;
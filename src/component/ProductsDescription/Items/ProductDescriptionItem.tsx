import React from 'react';
import styles from './ProductDescriptionItem.module.css';

interface ProductDescriptionItemProps {
    text: string;
    hidden_text : string;
}

const ProductDescriptionItem: React.FC<ProductDescriptionItemProps> = ({text, hidden_text}) => {
    return (
      <div className={styles.products_description_bests_item}>{text}
        <div className={styles.products_description_bests_item_hidden}>{hidden_text}</div>
      </div>
    );
}

export default ProductDescriptionItem;
import React from 'react';
import styles from './ReviewExample.module.css';

interface ReviewProps {
    title: string;
    name: string;
    city: string;
    text: string;
}

const ReviewExample: React.FC<ReviewProps> = ({title, name, city, text}) => {
  return (
                <div className={styles.products_description_examle + " " + styles.products_desctiption_item}>
                    <h1>{title}</h1>
                    <div className={styles.products_description_examle_userinfo + " " + styles.products_desctiption_grid}>
                        <img className={styles.products_description_examle_userinfo_avatar} src="https://ionoto.ru/upload/medialibrary/a1f/tcs61nk83dig738gik8qtkcx6ue7sgek.png"/>
                        <div className = {styles.products_description_examle_userinfo_info}>
                            <img src='https://myelitelawncare.com/wp-content/uploads/2018/12/5-star-review.png'/>
                            <h1>{name}</h1>
                            <h1>{city}</h1>
                        </div>
                    </div>
                    <div className={styles.products_description_examle_text}>
                        {text}
                    </div>
                </div>
  );
};

export default ReviewExample;
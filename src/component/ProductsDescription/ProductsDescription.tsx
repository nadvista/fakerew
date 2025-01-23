import React from 'react';
import styles from './ProductsDescription.module.css';
import ProductDescriptionItem from './Items/ProductDescriptionItem'
import { useRef } from 'react'

const ProductsDescription: React.FC = () => {
  return (
    <div className={styles.products_desctiption} id='descriptionStart'> 
        <div className={styles.products_desctiption_title}> 
            <h1>Чем мы занимаемся</h1>

            <div className={styles.products_description_text}>
            Генерация фейковых отзывов - это услуга, предназначенная для создания реалистичных и убедительных отзывов 
            о вашем продукте. Она может быть полезна для бизнесов, стремящихся повысить свою репутацию и привлечь 
            больше клиентов. Для генерации мы используем передовые алгоритмы и технологии, чтобы создать отзывы,
            которые выглядят и звучат как настоящие, написанные реальными людьми. Это позволяет улучшить восприятие 
            вашего бренда и продукта на рынке, 
            увеличивая доверие потенциальных клиентов.
            </div>
        </div>

        <div className={styles.products_desctiption_grid}>
            <div className={styles.products_description_bests + " " + styles.products_desctiption_item}>
                <h1>Преимущества работы с нами</h1>
                <ProductDescriptionItem text='Лучшая цена на рынке' hidden_text='Да, это так, наши цены в среднем на 99% ниже чем у конкурентов' />
                <ProductDescriptionItem text='Высокая скорость выполнения' hidden_text='Выполняем заказы в течение 2-х дней' />
                <ProductDescriptionItem text='Высокое качество отзывов' hidden_text='Все наши отзывы тщательно фильтруются, каждый из них выглядит так, будто написан реальным человеком' />
                <ProductDescriptionItem text='Возможность внесения правок' hidden_text='Оперативно изменим непонравившиеся вам отзывы' />
                <ProductDescriptionItem text='Отсутствие повторов' hidden_text='Все наши отзывы не похожи друг на друга' />
            </div>

            <div className={styles.products_description_examle + " " + styles.products_desctiption_item}>
                <h1>Пример отзыва</h1>
                <div className={styles.products_description_examle_userinfo + " " + styles.products_desctiption_grid}>
                    <img className={styles.products_description_examle_userinfo_avatar} src="https://ionoto.ru/upload/medialibrary/a1f/tcs61nk83dig738gik8qtkcx6ue7sgek.png"/>
                    <div className = {styles.products_description_examle_userinfo_info}>
                        <img src='https://myelitelawncare.com/wp-content/uploads/2018/12/5-star-review.png'/>
                        <h1>Кирносов Егор</h1>
                        <h1>Москва</h1>
                    </div>
                </div>
                <div className={styles.products_description_examle_text}>
                    Я недавно воспользовался услугой "Генератор отзывов" и хочу поделиться своим впечатлением. Это было просто потрясающе! Сервис оказался очень удобным и эффективным. Вам нужно всего лишь предоставить несколько ключевых деталей о том, что вы хотите сказать, и система мгновенно генерирует качественный отзыв, который звучит естественно и убедительно.
                    Мне особенно понравилось, что отзывы, созданные с помощью этого сервиса, не только информативны, но и написаны в дружелюбном и позитивном тоне. Это идеальный способ поделиться своими впечатлениями о продукте или услуге, не тратя при этом много времени на написание текста.
                    Я был приятно удивлен скоростью работы сервиса и его способностью точно передать ...
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductsDescription;
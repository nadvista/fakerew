import React, { useState } from 'react';
import styles from './ExampleMaker.module.css';
import stylesDesc from '../ProductsDescription/ProductsDescription.module.css'
import SimpleButton from '../SimpleButton/SimpleButton';
import { Mistral } from "@mistralai/mistralai";
import ReviewExample from '../ReviewExample/ReviewExample';

const ExampleMaker: React.FC = () => {

  const [items, setItems] = useState<string[]>([]);
  const [isloading, setloading] = useState<boolean>(true);
  const [isprepared, setPrepared] = useState<boolean>(false);

  const [productDescription, setProductDescription] = useState<string>('');
  const mistral = new Mistral({
    apiKey: "JFQijZ5M2deWlrrryH4S2o4MLUebIvcAE",
  });

  const getWrappedRequest = () => {
    return 'Представь что ты мой клиент. Описание моего продукта следующее: ' + productDescription + 'Придумай себе имя и город и напиши восторженный отзыв на 50-100 слов о том как тебе понравился мой продукт/услуга. В ответе пришли только три строки по следующему правилу: в первой строке укажи только свое имя, во второй только - город, а в третьей только - содержание отзыва. Не подписывай строки.'
  };

  const onTryClick = async () => {
    try {
      setPrepared(true)
      const response = await mistral.chat.complete({
        model: "mistral-small-latest",
        stream: false,
        messages: [
          {
            content: getWrappedRequest(),
            role: "user",
          },
        ],
      });

      const data = response.choices[0].message.content;
      setItems([data]); // Предполагаем, что результат находится в data.choices[0].text
      setloading(false)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className={styles.products_desctiption} id='descriptionStart'>
      <div className={styles.products_desctiption_title}>
        <h1>Пример отзыва</h1>
        <div className={stylesDesc.products_description_text}>
          Кратко опишите ваш продукт или вид деятельности, чтобы мы могли бесплатно создать для вашего сайта примерный отзыв
        </div>
      </div>
      <div className={styles.input_description}>
        Описание продукта
        <input type='text' className={styles.text_input} maxLength={50} size={50} placeholder='Введите описание здесь...' onChange={(e) => { setProductDescription(e.target.value) }} />
        <SimpleButton text='Попробовать' onclick={() => onTryClick()} />
      </div>
      <div className={styles.input_description}>
        <div className={styles.reviews}>
          {
            isprepared? (
            isloading? <h1>Загрузка...</h1>:
            items.map((item, index) => {
              const splitted: string[] = item.split('\n');
              const name: string = splitted[0];
              const city: string = splitted[1];
              const review: string = splitted[2];

              return (<ReviewExample name={name} city={city} text={review} title='Результат' />);
            })) : <div/>
          }
        </div>
      </div>
    </div>
  );
};

export default ExampleMaker;
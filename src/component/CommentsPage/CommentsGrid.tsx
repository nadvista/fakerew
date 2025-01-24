import React, {useState, useEffect} from 'react';
import stylesDesc from '../Example/ExampleMaker.module.css'
import styles from './CommentsGrid.module.css'
import CommentItem from './CommentItem/CommentItem';
import { Mistral } from "@mistralai/mistralai";

function CommentsGrid() {
    const [items, setItems] = useState<JSX.Element[]>([]);
    const [isloading, setloading] = useState<boolean>(true);


    const mistral = new Mistral({
        apiKey: "JFQijZ5M2deWlrrryH4S2o4MLUebIvcA",
    });

    const getWrappedRequest = () => {
        return 'Напиши от 10 до 20 комментариев разного рода для сайта по продаже фейковых отзывов. Комментарии должды быть разделены символом новой строки Каждый комментарий начинается с никнейма - придумай его сам. После никнейма пиши текст комментария. Никнейм и содержимое разделяются двоеточием. Ничего не подписывай в своем ответе, пиши только как я сказал. Текст и никнейм комментария могут быть на любом языке. Пример ответа для двух комментариев:\n GreatTiger: Сайт потрясающий! Хочу арбуз \n AwesomeBalls: Разочарованию нет предела'
    };

    const generateReviews = async () => {
        try {
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

            const data: String = response.choices[0].message.content;
            const reviews = data.split('\n');
            const resultItems = reviews.map((value, index) => {
                const valueContent = value.split(':')
                let userName = valueContent[0];
                let text = valueContent[1];
                if(userName === '') text = 'EmptyUsername'
                if(text === '') text = 'Empty'

                return <CommentItem name={userName} text={text} />
            });
            setItems(resultItems);
            setloading(false)
            //setItems([data]); // Предполагаем, что результат находится в data.choices[0].text
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    useEffect(() => {
        generateReviews();
    }, []);

    return (
        <div className={stylesDesc.products_desctiption} id='descriptionStart'>
            <div className={stylesDesc.products_desctiption_title}>
                <h1>Комментарии о нас</h1>
                <div className={styles.comments_grid}>
                    {isloading ? <h1>Загрузка...</h1> : items}
                </div>
            </div>
        </div>
    );
}

export default CommentsGrid;
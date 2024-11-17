import React from 'react';
import './ProductsDescription.css';
const ProductsDescription: React.FC = () => {
  return (
    <div className='products-desctiption'> 
        <div className='products-desctiption-title'> 
            <h1>Чем мы занимаемся</h1>

            <div className='products-description-text'>
            Генерация фейковых отзывов - это услуга, предназначенная для создания реалистичных и убедительных отзывов 
            о вашем продукте. Она может быть полезна для бизнесов, стремящихся повысить свою репутацию и привлечь 
            больше клиентов. Для генерации мы используем передовые алгоритмы и технологии, чтобы создать отзывы,
            которые выглядят и звучат как настоящие, написанные реальными людьми. Это позволяет улучшить восприятие 
            вашего бренда и продукта на рынке, 
            увеличивая доверие потенциальных клиентов.
            </div>
        </div>

        <div className='products-desctiption-grid'>
            <div className='products-description-bests products-desctiption-item'>
                <h1>Преимущества работы с нами</h1>
                <div className='products-description-bests-item'>Лучшая цена на рынке
                    <div className='products-description-bests-item-hidden'>Да, это так, наши цены в среднем на 99% ниже чем у конкурентов</div>
                </div>
                <div className='products-description-bests-item'>Высокая скорость выполнения
                    <div className='products-description-bests-item-hidden'>Выполняем заказы в течение 2-х дней</div>
                </div>
                <div className='products-description-bests-item'>Гарантия результата
                    <div className='products-description-bests-item-hidden'>Написанные нами отзывы гарантированно добавят не менее 10% к количеству ваших заказов</div>
                </div>
                <div className='products-description-bests-item'>Высокое качество отзывов
                    <div className='products-description-bests-item-hidden'>Все наши отзывы тщательно фильтруются, каждый из них выглядит так, будто написан реальным человеком</div>
                </div>
                <div className='products-description-bests-item'>Возможность внесения правок
                    <div className='products-description-bests-item-hidden'>Оперативно изменим непонравившиеся вам отзывы</div>
                </div>
                <div className='products-description-bests-item'>Отсутствие повторов
                    <div className='products-description-bests-item-hidden'>Все наши отзывы не похожи друг на друга</div>
                </div>
            </div>

            <div className='products-description-examle products-desctiption-item'>
                <h1>Пример отзыва</h1>
                <div className='products-description-examle-userinfo products-desctiption-grid'>
                    <img className="products-description-examle-userinfo-avatar" src="https://ionoto.ru/upload/medialibrary/a1f/tcs61nk83dig738gik8qtkcx6ue7sgek.png"/>
                    <div className = 'products-description-examle-userinfo-info'>
                        <img src='https://myelitelawncare.com/wp-content/uploads/2018/12/5-star-review.png'/>
                        <h1>Кирносов Егор</h1>
                        <h1>Москва</h1>
                    </div>
                </div>
                <div className='products-description-examle-text'>
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
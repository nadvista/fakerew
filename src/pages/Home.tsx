import React from 'react';
import PageTitle from '../component/PageTitle/PageTitle';
import ProductsDescription from '../component/ProductsDescription/ProductsDescription';
import Catalog from '../component/Catalog/Catalog/Catalog';

function Home() {
  return (
    <div>
      <PageTitle text='Фальшивые отзывы'/>
      <ProductsDescription />
      <Catalog />
    </div>
  );
}

export default Home;
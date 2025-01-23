import React from 'react';
import Header from '../component/Header/Header';
import CatalogTitle from '../component/Catalog/CatalogTitle/CatalogTitle';
import CatalogGrid from '../component/Catalog/CatalogGrid/CatalogGrid';
import PageTitle from '../component/PageTitle/PageTitle';
import ProductsDescription from '../component/ProductsDescription/ProductsDescription';
import Catalog from '../component/Catalog/Catalog/Catalog';

function Home() {
  return (
    <div>
      <PageTitle />
      <ProductsDescription />
      <Catalog />
    </div>
  );
}

export default Home;
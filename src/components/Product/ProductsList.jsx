import React, { useState, useEffect } from 'react';

import ProductItem from './ProductItem';
import 'boxicons';
import ProductsForm from './ProductsForm';

const ProductsList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://productos.danteiturri.me/api/products'
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const updateProductList = async () => {
    try {
      // Se llama a la API para obtener la lista de productos actualizada
      const response = await fetch(
        'https://productos.danteiturri.me/api/products'
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="card-body-products">
        <ProductsForm updateProductList={updateProductList} />

        <table className="card-table-data">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Creado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => {
              return <ProductItem key={product.id} product={product} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsList;

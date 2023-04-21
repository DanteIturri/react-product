import React from 'react';
import 'boxicons';
const ProductItem = ({ product }) => {
  const { codigo, nombre, descripcion, cantidad, created_at } = product;
  const fecha = new Date(created_at);
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();

  return (
    <>
      <tr>
        <td>{codigo}</td>
        <td>{nombre}</td>
        <td>{descripcion}</td>
        <td>{cantidad}</td>
        <td>
          {dia} - {mes} - {anio}
        </td>
      </tr>
    </>
  );
};

export default ProductItem;

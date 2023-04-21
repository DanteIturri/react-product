import React, { useState } from 'react';

const ProductsForm = ({ updateProductList }) => {
  const [codigo, setCodigo] = useState(0);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState(0);

  const handleProductCodigoChange = (event) => {
    setCodigo(event.target.value);
  };
  const handleProductNameChange = (event) => {
    setNombre(event.target.value);
  };
  const handleProductDescriptionChange = (event) => {
    setDescripcion(event.target.value);
  };
  const handleProductCantidadChange = (event) => {
    setCantidad(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!codigo || !nombre || !descripcion || !cantidad) {
      alert('Por favor, completa todos los campos');
      return;
    }
    const productData = {
      codigo,
      nombre,
      descripcion,
      cantidad,
    };
    try {
      const response = await fetch(
        'https://productos.danteiturri.me/api/products',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        }
      );
      if (response.ok) {
        alert('Producto creado exitosamente');
        updateProductList();
        setCodigo(0);
        setNombre('');
        setDescripcion('');
        setCantidad(0);
      } else {
        alert('Error al crear el producto');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="number"
          name="codigo"
          placeholder="Codigo"
          onChange={handleProductCodigoChange}
          value={codigo}
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleProductNameChange}
          value={nombre}
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripcion"
          onChange={handleProductDescriptionChange}
          value={descripcion}
        />
        <input
          type="number"
          name="cantidad"
          placeholder="Cantidad"
          onChange={handleProductCantidadChange}
          value={cantidad}
        />

        <button type="submit"> crear</button>
      </form>
    </>
  );
};

export default ProductsForm;

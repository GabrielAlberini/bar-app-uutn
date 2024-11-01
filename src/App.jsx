// src/Home.jsx
import { useState, useEffect } from 'react';
import db from "./config/firebase.js"
import "./App.css"

const Home = () => {
  const [products, setProducts] = useState([]);

  const dataBase = db
  console.log(dataBase)

  useEffect(() => {
    const fetchProducts = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      const fakeProducts = [
        { id: 1, name: 'Pizza Margherita', price: 12, description: 'Clásica pizza italiana con mozzarella y albahaca', size: 'Grande', vegetarian: true, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Hamburguesa BBQ', price: 15, description: 'Jugosa hamburguesa con salsa BBQ y queso cheddar', size: 'Mediana', vegetarian: false, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Ensalada César', price: 10, description: 'Ensalada fresca con pollo, crutones y queso parmesano', size: 'Pequeña', vegetarian: false, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Pasta Alfredo', price: 13, description: 'Pasta cremosa con salsa Alfredo y queso parmesano', size: 'Grande', vegetarian: true, image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Tacos de Carne', price: 11, description: 'Tacos de carne con guacamole y salsa picante', size: 'Mediana', vegetarian: false, image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Sopa de Tomate', price: 8, description: 'Sopa caliente de tomate con albahaca fresca', size: 'Pequeña', vegetarian: true, image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Sopa de Tomate', price: 8, description: 'Sopa caliente de tomate con albahaca fresca', size: 'Pequeña', vegetarian: true, image: 'https://via.placeholder.com/150' },
      ];
      setProducts(fakeProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Menú de Restaurante</h1>
      <div style={styles.productGrid}>
        {products.map(product => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <p>Descripción: {product.description}</p>
            <p>Tamaño: {product.size}</p>
            <p>{product.vegetarian ? 'Vegetariano' : 'No vegetariano'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilos en línea para simplificar
const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default Home;

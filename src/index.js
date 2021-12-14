import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from "./context/products_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";

ReactDOM.render(
      <ProductsProvider>
          <CartProvider>
          <UserProvider>
              <App />
          </UserProvider>
          </CartProvider>
      </ProductsProvider>
  ,
  document.getElementById('root')
);



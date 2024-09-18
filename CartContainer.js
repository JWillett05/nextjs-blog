import React, { useContext } from 'react';
import { CartContext } from './layout';

export default function CartContainer() {
  const cartItems = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>My Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>Item ID: {item.id}</li>
        ))}
      </ul>
    </div>
  );
}

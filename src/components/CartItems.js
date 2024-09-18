import React, { useContext } from 'react';
import { CartContext } from '@/contexts/cart-context';
import styles from "@/page.module.css"

export default function CartItems() {
  const cart = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0) 

  return (
    <div className="cart-container">
      {/* <p className={styles.cartItemDesc}>{JSON.stringify(cart)}</p> */}
      <ul>
        {cart.map(item => (
          <li className={styles.cartItemList} key={item.id}>{item.name} <div className={styles.itemPrice}> £{item.price.toFixed(2)}</div> </li>
        ))}
        <li className={styles.cartItemList}>
          Total Price: £{totalPrice.toFixed(2)}
        </li>
      </ul>
    </div>
  );
}

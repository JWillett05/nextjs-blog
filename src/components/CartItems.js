import React, { useContext } from 'react';
import { CartContext } from '@/contexts/cart-context';
import styles from "@/page.module.css";

export default function CartItems() {
  const { cartItems = [] } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + (Number(item.price) || 0), 0);

  return (
    <div className="cart-container">
      <ul>
        {cartItems.map(item => (
          <li className={styles.cartItemList} key={item.id}>
            {item.title} <div className={styles.itemPriceCart}> £{(Number(item.price) || 0).toFixed(2)}</div>
          </li>
        ))}
        <li className={styles.cartItemList}>
          Total Price: <div className={styles.itemPriceCart}> £{totalPrice.toFixed(2)}</div>
        </li>
      </ul>
    </div>
  );
}

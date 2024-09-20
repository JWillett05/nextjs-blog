import { useContext } from 'react';
import { CartContext } from '@/contexts/cart-context';
import styles from "@/page.module.css";

export default function CartItems({ cartItems, totalPrice }) {
  const {removeFromCart} = useContext(CartContext)

  const handleDelete = (itemId) => {
    removeFromCart(itemId);
  }

  return (
    <div className="cart-container">
      <ul >
        {cartItems.map(item => (
          <li className={styles.cartItemList} key={item.id}>
            {item.title} <div className={styles.itemPriceCart}> £{(Number(item.price) || 0).toFixed(2)}</div>
            <button className={styles.removeItem} onClick={() => handleDelete(item.id)}>🗑️</button>
          </li>
        ))}
      </ul>
      <div className={styles.line}></div>

      <ul >
        <li className={styles.cartItemList}>
            Total Price: <div className={styles.itemPriceCart}> £{totalPrice.toFixed(2)} </div>
        </li>
      </ul>
    </div>
  );
}

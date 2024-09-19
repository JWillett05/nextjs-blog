import { useContext } from "react";
import styles from "../page.module.css";
import { CartContext } from "@/contexts/cart-context";

export default function Product_Items({ product }) {
    const {addToCart} = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product)
    }
    return (
    <a className={styles.itemLink}>
        <li className={styles.products}>
            <img className={styles.images} src={product.image} alt={product.title}/>
            <h2 className={styles.itemTitle}> {product.title} </h2>
            <p className={styles.itemDesc}> {product.description} </p>
            <h5 className={styles.itemPrice}> £{product.price} </h5>
            <button onClick={handleAddToCart} className={styles.addToCartButton}>Add to cart</button>
        </li>
    </a>
    );
  }
  
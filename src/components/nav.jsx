import styles from "@/page.module.css";
import { useRouter } from "next/router";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";

export default function NavBar() {
    const router = useRouter();
    const { totalPrice } = useContext(CartContext); // Access totalPrice from context

    const handleCartClick = () => {
        router.push('/cart');
    };

    const handleProduceClick = () => {
        router.push('/');
    };

    // Ensure totalPrice is a number and format it correctly
    const cartPrice = Number(totalPrice).toFixed(2);

    return (
        <div>
            <div className={styles.navBar}>
                <button className={styles.productNavBar} onClick={handleProduceClick}>
                    <h1>Home</h1>
                </button>
                <button className={styles.cartNav} onClick={handleCartClick}>
                    Cart (£{cartPrice})
                </button>
            </div>
        </div>
    );
}

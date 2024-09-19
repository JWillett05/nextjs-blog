import styles from "@/page.module.css"
import CartHeader from "@/components/CartHeader";
import NavBar from "@/components/nav";
import CartItems from "@/components/CartItems";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";

 
export default function Cart(){
    const { cartItems = [] } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + (Number(item.price) || 0), 0);

    return(
    <>
        <div><NavBar/></div>
            <div className={styles.page}>
                <div className={styles.cartBackground}>
                    <CartHeader />
                    <CartItems cartItems={cartItems} totalPrice={totalPrice}/>
                    <div className={styles.checkoutButton}> <div className={styles.checkoutPrice}>Checkout • £{totalPrice.toFixed(2)}</div>
                </div>
            </div>
        </div>
    </>
    );
}
import styles from "@/page.module.css"
import CartHeader from "@/components/CartHeader";
import NavBar from "@/components/nav";
import CartItems from "@/components/CartItems";

export default function Cart(){
    return(
    <>
    <div><NavBar/></div>
        <div className={styles.page}>
            <div className={styles.cartBackground}>
                <CartHeader />
                <CartItems />
                <div className={styles.checkoutButton}>Checkout</div>
            </div>
        </div>
    </>
    );
}
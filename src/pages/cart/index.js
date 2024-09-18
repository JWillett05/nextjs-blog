import styles from "@/page.module.css"
import CartHeader from "@/components/CartHeader";

export default function Cart(){
    return(
    <div className={styles.page}>
        <div className={styles.cartBackground}>
            <div className={styles.cartHeader}>
                <CartHeader>Cart</CartHeader>
            </div>
        </div>
    </div>
    );
}
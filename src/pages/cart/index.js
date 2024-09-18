import styles from "@/page.module.css"
import CartHeader from "@/components/CartHeader";
import NavBar from "@/components/nav";

export default function Cart(){
    return(
    <>
    <div><NavBar/></div>
        <div className={styles.page}>
            <div className={styles.cartBackground}>
                <div className={styles.cartHeader}>
                    <CartHeader>Cart</CartHeader>
                </div>
            </div>
        </div>
    </>
    );
}
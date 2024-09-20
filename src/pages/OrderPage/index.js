import NavBar from "@/components/nav";
import styles from "@/page.module.css"
import { useRouter } from "next/router";

export default function OrderPage(){

    const router = useRouter();

    const handleHomeClick = () => {
        router.push('http://localhost:3000');
    };
    return (
        <>
        <div><NavBar/></div>
            <div className={styles.page}>
                <div className={styles.cartBackground}>
                    <div className={styles.orderPageThanks}>
                    <h1 className={styles.header}>Thank you for your order</h1>
                    <p className={styles.itemDesc}>It will be shipped soon.</p>
                    </div>
                        <button className={styles.checkoutButton} onClick={handleHomeClick}>
                            <div className={styles.checkoutPrice}>Back to Home</div>
                        </button>
                </div>
            </div>
    </>
    )
}
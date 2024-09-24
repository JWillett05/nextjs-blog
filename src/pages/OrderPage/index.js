import NavBar from "@/components/nav";
import styles from "@/page.module.css"
import { useRouter } from "next/router";

export default function OrderPage(){

    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
    };
    return (
        <>
        <div><NavBar/></div>
            <div className={styles.page}>
                <div className={styles.cartBackground}>
                    <div className={styles.orderPageThanks}>
                    <h1 className={styles.headerOrder}>Thank you for your order</h1>
                    <p className={styles.itemDescOrder}>It will be shipped soon.</p>
                    </div>
                        <button className={styles.checkoutButton} onClick={handleHomeClick}>
                            <div className={styles.checkoutPrice}>Back to Home</div>
                        </button>
                </div>
            </div>
    </>
    )
}
import styles from "@/page.module.css"
import { useRouter } from "next/router";

export default function NavBar({totalOfItems}){
    const router = useRouter();

    const handleCartClick = () => {
        router.push('/cart')
    }
    const handleProduceClick = () => {
        router.push('/')
    }
    return(
        <div>
            <div className={styles.navBar}>
            {/* <h1 className={styles.productNavBar}>Produce</h1> */}
            <button className={styles.productNavBar} onClick={handleProduceClick}><h1>Home</h1></button>

            <button className={styles.cartNav} onClick={handleCartClick}>Cart ({totalOfItems})</button>
            </div>
        </div>
    )
}
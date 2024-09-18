import styles from "@/page.module.css"

export default function CartHeader() {
    return (
        <div className={styles.cartBackground}>
            <h1 className={styles.cartHeader}>Cart</h1>
            {/* <p>{items}{priceOfItems}</p> */}
            {/* <button className={style.orderMoreButton} onClick={handleClick}>Order More</button> */}
            {/* <p>Total {totalOfItems}</p> */}
            <button className={styles.checkoutButton}>Checkout {/*{totalOfItems}*/} </button>
        </div>
    );
  }
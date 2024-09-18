import styles from "@/page.module.css"

export default function CartHeader() {
    return (
        <>
        <h1 className="cartHeader">Cart</h1>
        {/* <p>{items}{priceOfItems}</p> */}
        {/* <button className={style.orderMoreButton} onClick={handleClick}>Order More</button> */}
        {/* <p>Total {totalOfItems}</p> */}
        <button className={styles.checkoutButton}>Checkout {/*{totalOfItems}*/} </button>
        </>
    );
  }
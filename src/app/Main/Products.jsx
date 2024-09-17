import styles from "../page.module.css";


export default function Product_Items({image, title, description, price}) {
    return (
    //   <div className={styles.products}>
    //       {product}
    //   </div>

        <li className={styles.products}>
            <img className={styles.images} src={image} alt={title} />
            <h2 className={styles.itemTitle}> {title} </h2>
            <p className={styles.itemDesc}> {description} </p>
            <h5 className={styles.itemPrice}> {price} </h5>
        </li>
    );
  }
  
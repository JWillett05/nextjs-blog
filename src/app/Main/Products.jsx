import styles from "../page.module.css";


export default function Product_Items({image, title, description, price}) {
    return (
    //   <div className={styles.products}>
    //       {product}
    //   </div>

        <li className={styles.products}>
            {/* <img src={image} alt={title} /> */}
            <h2 className="itemTitle">{title}</h2>
            <p>{description}</p>
            <h5>{price}</h5>
        </li>
    );
  }
  
import styles from "../page.module.css";
import Header from "../components/Header.jsx";
import Products from "../components/Products.jsx";
import { Data } from "../api/data.js";

export default function Home() {
  return (
    <>
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <Header />
        </div>
          
      </main>
    </div>
    <section className={styles.productLayoutWrapper}>
      <ul className={styles.productLayout}>
        {Data.map((productItem) => (
        <Products key={productItem.title} {...productItem}/>
        ))}
      </ul>

    </section>
        

    </>    
  );
}

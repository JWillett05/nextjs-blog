import styles from "./page.module.css";
import Header from "./Main/Header.jsx";
import Products from "./Main/Products";
import Cart from "./Main/Cart";
import { Data } from "./data";


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

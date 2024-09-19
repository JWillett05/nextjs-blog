import styles from "../page.module.css";
import Header from "../components/Header.jsx";
import Products from "../components/Products.jsx";
import { Data } from "../api/data.js";
import NavBar from "@/components/nav";

export default function Home() {
  return (
    <>
    <div><NavBar/></div>
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
        <Products key={productItem.title} product={productItem}/>
        ))}
      </ul>

    </section>
        

    </>    
  );
}

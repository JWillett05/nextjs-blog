import styles from "./page.module.css";
import Header from "./Main/Header.jsx";
import Products from "./app/Main/Products";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <div className={styles.header}>
            <Header/>
          </div>
      </main>
    </div>
  );
}

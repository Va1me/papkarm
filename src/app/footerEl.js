import styles from "./footer.module.css";

export default function Home() {
  return (
        <footer className={styles.footer}>
          <hr></hr>
          <h1>Папкарм</h1>
          <img src="/favicon.ico"></img>
          <div className={styles.copyright}>
            Папкарм®
            <span className={styles.divider}>  |  </span>
            ©2025 Все права защищены
          </div>
        </footer>
  );
}

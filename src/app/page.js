import styles from "./page.module.css";
import info from "./infoEl.js"
import header from "./headerEl.js"
import whyarm from "./whyarmEl.js"
import footer from "./footerEl.js"
import shapes from "./shapesEl.js"

export default function Home() {
  return (
    <div className={styles.page}>
      {header()}
      <main className={styles.main}>
        {info()}
        {whyarm()}
        {shapes()}
        {footer()}
      </main>
    </div>
  );
}

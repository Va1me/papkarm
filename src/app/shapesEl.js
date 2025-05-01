import styles from "./shapes.module.css";

export default function Home() {
  return (
        <div className={styles.shapes}>
          <div className={styles.square}></div>
          <div className={styles.circle}></div>
          <div className={styles.rhomb}></div>
        </div>
  );
}

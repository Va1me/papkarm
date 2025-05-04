import styles from "./info.module.css";

export default function Home() {
  return (
        <div className={styles.info}>
            <p>
              Занимайся<br></br>
              армреслингом<br></br>
              вместе с нами
            </p>
            <img className={styles.img1} src={'/infoImg.jpg'}></img>
            <div className={styles.img2Container}>
            <img className={styles.img2} src={'/infoImg1.jpg'}></img>
            <div className={styles.buttonContainer}>
            <button className={styles.button1}>Что такое армреслинг?</button>
            <button>Как начать тренироваться?</button>
            </div>
            </div>
        </div>
  );
}

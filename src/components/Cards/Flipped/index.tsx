import Image from "next/image";
import styles from "./styles.module.css";
import {cat1, questionMarkGif} from "@/img/index"

export const FlipCard = () => {
  return (
    <div className={`img-border ${styles["container"]}`}>
      <div className={styles["card"]}>
        <div className={styles["front"]}>Front
            <Image src={questionMarkGif} alt="..." className={styles["front-image"]}/>
        </div>
        <div className={styles["back"]}>Back</div>
      </div>
    </div>
  );
};

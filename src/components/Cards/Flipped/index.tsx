import Image from "next/image";
import styles from "./styles.module.css";
import { questionMarkGif } from "@/img/index";

export const FlipCard = () => {
  return (
    <div className={styles["container"]}>
      <div className={`img-border ${styles["card"]}`}>
        <div className={styles["front"]}>
          <Image
            src={questionMarkGif}
            alt="Question mark gif"
            className={styles["front-image"]}
          />
          <p className={styles["front-text"]}>What's the past of ask?</p>
        </div>
        <div className={styles["back"]}>
          <p>Back</p>
        </div>
      </div>
    </div>
  );
};

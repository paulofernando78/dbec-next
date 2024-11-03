import Image from "next/image";
import styles from "./styles.module.css";

import notesIcon from "../../../public/assets/img/icon/notes.png"

export const TextArea = () => {
  return (
    <>
      <div className={styles["icon-text"]}>
          <Image src={notesIcon} className="icon-general" alt="Notes icon" />
          <p><b>Notes</b></p>
      </div>
      <textarea className={styles["text-area"]}></textarea>
    </>
  );
};


// CSS
import styles from "./styles.module.css";

// Images
import Image from "next/image";
import { notesIcon } from "@/img/index";

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

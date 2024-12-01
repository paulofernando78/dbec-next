// Images
import Image from "next/image";
import { tools } from "@/img/index";

// CSS
import styles from "./styles.module.css";

export const UnderConstruction = () => {
  return (
    <div className={styles["flex"]}>
      <Image src={tools} alt="Tools icnderConon" className="icon-general" />
      <p>Under Construction!</p>
    </div>
  );
};

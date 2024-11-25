// CSS
import styles from "./styles.module.css";

// Image
import Image from "next/image";
import scrollToTopIcon from "@/img/icon/scroll-to-top.png";

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const ScrollToTop = () => {
  return (
    <div>
      <Image
        src={scrollToTopIcon}
        alt="Back-to-top icon"
        className={styles["scroll-to-top"]}
        onClick={scrollToTop}
      />
    </div>
  );
};

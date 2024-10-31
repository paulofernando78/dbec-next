"use client";
import Link from "next/link";
import Image from "next/image";

// CSS
import styles from "@/components/Header/style.module.css";

// Images
import usaUkIcon from "../../../public/assets/img/header-usa-uk-icon.png";
import btnIcon from "../../../public/assets/img/icon/btn-menu.png";

interface HeaderProps {
  show?: boolean;
  toggleShow: () => void;
}

export const Header = ({ show, toggleShow }: HeaderProps) => {
  return (
    <div className={styles["header-content"]}>
      <Image
        src={usaUkIcon}
        alt="Flag icon"
        className={styles["usa-uk-flag-icon"]}
      />
      <Image
        src={btnIcon}
        alt="Button icon"
        className={styles["btn-menu"]}
        onClick={() => toggleShow()}
      />
      <Link href="/materials">
        <p className={styles["logo-name"]}>
          <b>DAILY BASIS ENGLISH COURSE</b>
        </p>
      </Link>
    </div>
  );
};

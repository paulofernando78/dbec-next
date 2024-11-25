"use client";

// components
import Link from "next/link";

// CSS
import styles from "./style.module.css";

// Images
import Image from "next/image";
import { ukUSflag, btnIcon } from "@/img/index";

// Typescript
import { HeaderProps } from "./type";

export const Header = ({ show, toggleShow }: HeaderProps) => {
  return (
    <div className={styles["header-content"]}>
      <Image
        src={ukUSflag}
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

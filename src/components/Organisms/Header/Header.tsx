"use client";

import { ThemeSwitch } from "../../Molecules/Buttons/ThemeSwitch";

import Link from "next/link";

// Components
import { HeaderMenuButton } from "@/components/index";

// CSS
import styles from "./Header.module.css";

// Fonts
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false,
});

// Typescript
import { HeaderProps } from "./Header.types";

export const Header = ({ toggleShow }: HeaderProps) => {
  return (
    <div className={styles["header-container"]}>
      <span className={styles["header-btn-menu"]}>
        <HeaderMenuButton toggle={toggleShow} isActive={false} />
      </span>
      <div className={styles["header-inner-container"]}>
        <div className={styles["header-logo-name"]}>
          <Link href="/materials">
            <p className={styles["logo-name"]}>
              <b className={lato.className}>DAILY BASIS ENGLISH COURSE</b>
            </p>
          </Link>
          {/* <p className="">Welcome, ...</p> */}
        </div>
      </div>
      <ThemeSwitch />
    </div>
  );
};

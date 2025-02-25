"use client";

// Components
import Link from "next/link";

// Styles
import styles from "./Header.module.css";

// Images
import Image from "next/image";
import { btnIcon } from "@/img/index";

// Fonts
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false,
});

// Typescript
import { HeaderProps } from "./type";
import { ThemeSwitch } from "../../Molecules/ThemeSwitch";
import { Neumorphism } from "@/components/Atoms/Neumorphism";

export const Header = ({ show, toggleShow }: HeaderProps) => {
  return (
    <Neumorphism>
      <div className={styles["header-container"]}>
        <Image
          src={btnIcon}
          alt="Button icon"
          className={styles["header-btn-menu"]}
          onClick={() => toggleShow()}
        />
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
    </Neumorphism>
  );
};

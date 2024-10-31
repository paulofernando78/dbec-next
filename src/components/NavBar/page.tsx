"use client";
import Link from "next/link";
import Image from "next/image";
import { navBarLinks } from "./navBarLinks";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// CSS
import styles from "./styles.module.css";

// Images
import dictionaryIcon from "../../../public/assets/img/icon/dictionary.png";

interface NavBarProps {
  show: boolean;
  width: string;
  toggleShow: () => void;
}

export const NavBar = ({ show, toggleShow }: NavBarProps) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  return show || !isSmallDevice ? (
    <nav className={styles["nav-bar"]}>
      <ul className="line-break">
        <div>
          <div className={styles["nav-list"]}>
            <Image
              src={dictionaryIcon}
              alt="Home"
              className={styles["nav-icon-size"]}
            />
            <li>
              {/* Dictionary */}
              <Link href="/materials/dictionary" onClick={() => toggleShow()}>
                <p className={`bold ${styles["nav-bar-link"]}`}>Dictionary</p>
              </Link>
            </li>
          </div>
        </div>

        <div className="line-break">
          {navBarLinks.map((navBarLink, index) => (
            <div key={index} className="line-break">
              <p className="bold">{navBarLink.label}</p>
              <div>
                {navBarLink.links.map((link, linkIndex) => (
                  <div key={linkIndex} className={styles["nav-list"]}>
                    <Image
                      src={link.imgSrc}
                      alt={link.altName}
                      className={styles["nav-icon-size"]}
                      style={{ width: link.width }}
                    />
                    <Link
                      href={link.link}
                      className={styles["nav-bar-link"]}
                      onClick={() => toggleShow()}
                    >
                      <p>{link.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ul>
    </nav>
  ) : (
    ""
  );
};

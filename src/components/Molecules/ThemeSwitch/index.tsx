// Components
import { Button } from "@/components/Atoms/Button/Button";
import Image from "next/image";

// Hooks
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Images
import { moonIcon, sunIcon } from "@/img/index";

// CSS
import styles from "./ThemeSwith.module.css";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles["container"]}>
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        width="40px"
        height="40px"
      />
      <Image
        src={theme === "dark" ? sunIcon : moonIcon}
        alt="Theme Icon"
        width={30}
        height={30}
        className={styles["img-position"]}
      />
    </div>
  );
};

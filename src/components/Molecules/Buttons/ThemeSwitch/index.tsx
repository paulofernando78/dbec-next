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
        onClick={() => setTheme(theme === "light" ? "dark" : "light")} isActive={true}
        width="35px"
        height="35px"
      >
        <Image
          src={theme === "dark" ? sunIcon : moonIcon}
          alt="Theme Icon"
          width={25}
          height={25}
          className={styles["img-position"]}
        />
      </Button>
    </div>
  );
};

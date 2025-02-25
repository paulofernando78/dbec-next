// Components
import { Button } from "@/components/Atoms/Button/Button";

// Hooks
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Images
import { moonIcon, sunIcon } from "@/img/index";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ width: "max-content" }}>
      <Button
        width="38px"
        label={`${theme === "dark" ? "☀" : "☾"}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
};

// Components
import { Button } from "@/components/Atoms/Button";

// Hooks
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Images

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
    // Se o tema atual for "dark", ao clicar no botão ira mostrar “Switch to Light Mode”.
    // Se o tema atual for "light", ao clicar no botão ira mostrar “Switch to Dark Mode”.
      label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}

      // Se o tema atual for “light”, ele altera para “dark”.
      // Se o tema atual for “dark”, ele altera para “light”.
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    />
  );
};

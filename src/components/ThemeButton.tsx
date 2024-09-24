"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      size="icon"
      className="hover:bg-transparent">
      <Sun
        strokeWidth="2"
        className="h-8 w-8 text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        strokeWidth="2"
        className="absolute text-white h-8 w-8 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </Button>
  );
}

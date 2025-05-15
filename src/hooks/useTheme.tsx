"use client";
import { useState, useEffect } from "react";

const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(
    () => setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches),
    []
  );

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return { isDark, toggleDarkMode };
};
export default useTheme;

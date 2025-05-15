"use client";
import useTheme from "@/hooks/useTheme";

export const DarkModeToggle = () => {
  const { toggleDarkMode, isDark } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

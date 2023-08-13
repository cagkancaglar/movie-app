"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeComp = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted &&
        (themeMode === "dark" ? (
          <CiLight
            size={24}
            className="cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <CiDark
            size={24}
            className="cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
};

export default ThemeComp;

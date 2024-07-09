"use client";
import { useTheme } from "next-themes";
import { ThemeChangerWrapper } from "./style";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <ThemeChangerWrapper onClick={changeTheme} theme={theme}>
      Change Theme
    </ThemeChangerWrapper>
  );
};

export default ThemeChanger;

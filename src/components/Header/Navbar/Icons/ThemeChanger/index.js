"use client";
import { useTheme } from "next-themes";
import { ThemeChangerWrapper } from "./style";
import { useTranslations } from "next-intl";

const ThemeChanger = () => {
  const t = useTranslations("Header");
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <ThemeChangerWrapper onClick={changeTheme} theme={theme}>
      {t("theme")}
    </ThemeChangerWrapper>
  );
};

export default ThemeChanger;

import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type TTheme = "dark" | "light";
type TThemeContext = {
  theme: TTheme;
  setTheme: React.Dispatch<React.SetStateAction<TTheme>>;
};

const getInitialTheme = (): TTheme => {
  if (typeof window !== "undefined" && window.localStorage) {
    const getStorage = window.localStorage.getItem("color-theme");
    if (getStorage === "light" || getStorage === "dark") return getStorage;
    if (window.matchMedia("(prefers-color-scheme:dark").matches) return "dark";
    return "light";
  }
  return "light";
};

const ThemeContext = React.createContext<TThemeContext | "">("");

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [hasMounted, setHasMounted] = useState(false);

  const checkTheme = useCallback((currentTheme: TTheme) => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", currentTheme === "dark");
    root.classList.toggle("light", currentTheme === "light");
    localStorage.setItem("color-theme", currentTheme);
  }, []);

  useEffect(() => {
    setHasMounted(true);
    checkTheme(theme);
  }, [checkTheme, theme]);

  if (!hasMounted) return null;
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext) as TThemeContext;

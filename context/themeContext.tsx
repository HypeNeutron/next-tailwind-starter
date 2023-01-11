import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const getStorage = window.localStorage.getItem("color-theme");
    if (typeof getStorage === "string") return getStorage;
    if (window.matchMedia("(prefers-color-scheme:dark").matches) return "dark";
  }
  return "light";
};

type TThemeContext = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = React.createContext<TThemeContext | "">("");

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [hasMounted, setHasMounted] = useState(false);

  const checkTheme = useCallback((existing: string) => {
    const root = window.document.documentElement;
    root.classList.remove(existing === "dark" ? "light" : "dark");
    root.classList.add(existing);
    localStorage.setItem("color-theme", existing);
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

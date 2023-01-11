import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";
import { IconContext } from "react-icons";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useThemeContext } from "../context/themeContext";

type TLayout = {
  children?: ReactNode;
  name?: string;
};

export default function Layout({ children, name = "Home" }: TLayout) {
  const { theme, setTheme } = useThemeContext();
  return (
    <>
      <Head>
        <title>{`${name} | Next TypeScript`}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="right-0 w-10 pt-2 absolute">
        {theme === "light" ? (
          <button onClick={() => setTheme("dark")}>
            <IconContext.Provider value={{ size: "2rem" }}>
              <MdDarkMode />
            </IconContext.Provider>
          </button>
        ) : (
          <button onClick={() => setTheme("light")}>
            <IconContext.Provider value={{ size: "2rem" }}>
              <MdLightMode />
            </IconContext.Provider>
          </button>
        )}
      </div>
      <main className="mx-auto px-8 py-3 container">
        <header>
          <nav>
            <Link href="/">Home</Link>|<Link href="/about">About</Link> |
            <Link href="/users">Users List</Link> |
            <Link href="/api/users" target="_blank">
              Users API
            </Link>
          </nav>
        </header>
        {children}
        <br />
        <footer>
          <hr />
          <span>Copyright reserve &copy; {new Date().getFullYear()}</span>
        </footer>
      </main>
    </>
  );
}

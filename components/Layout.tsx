import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";

type TLayout = {
  children?: ReactNode;
  name?: string;
};

export default function Layout({ children, name = "Home" }: TLayout) {
  return (
    <>
      <Head>
        <title>{`${name} | Next TypeScript`}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="px-96 py-3">
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

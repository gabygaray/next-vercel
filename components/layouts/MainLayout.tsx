import React, { PropsWithChildren } from 'react'; 
import Head from "next/head";

import { NavBar } from "../Navbar";

import styles from "./MainLayout.module.css";

type Props = {};

export const MainLayout: React.FC<PropsWithChildren<Props>>  = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Gabriel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
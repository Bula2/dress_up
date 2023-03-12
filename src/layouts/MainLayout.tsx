import React from 'react';
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface IMainLayout {
  children: React.ReactNode
}

const MainLayout: React.FC<IMainLayout> = ({children}) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon/favicon.png"/>
        <meta name="theme-color" content="#ffffff"/>
        <title>{"DressUp"}</title>
      </Head>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default MainLayout;
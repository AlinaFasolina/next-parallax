import React, { FC, PropsWithChildren } from "react";
import Header from "./Header/Header";
import { Titillium_Web } from "next/font/google";
import Meta from "./Meta/Meta";
import { IMeta } from "./Meta/meta.interface";
import styles from "./styles.module.scss";
import dynamic from "next/dynamic";

const titillium = Titillium_Web({ weight: ["400"], subsets: ["latin"] });

const DynamicFooter = dynamic(() => import("./Footer/Footer"), { ssr: false });

const Layout: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className={titillium.className}>
      <Meta title={title} description={description} />
      <Header />
      <main className={styles.main}>{children}</main>
      <DynamicFooter />
    </div>
  );
};

export default Layout;

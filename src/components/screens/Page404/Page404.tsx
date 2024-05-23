import React, { FC } from "react";
import Image from "next/image";
import Layout from "../../layout/Layout";
import styles from "./styles.module.scss";

const Page404: FC = () => {
  return (
    <Layout title="Page not found">
      <div className={styles.wrapper}>
        <Image src="/error.webp" alt="404 error" width={600} height={400} />
      </div>
    </Layout>
  );
};

export default Page404;

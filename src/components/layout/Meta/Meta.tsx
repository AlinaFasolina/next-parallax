import Head from "next/head";
import { IMeta } from "./meta.interface";
import { FC } from "react";

const getTitle = (title: string) => `${title} | Company`;
const Meta: FC<IMeta> = ({ title, description, url }) => {
  return (
    <Head>
      <title>{getTitle(title)}</title>
      {description ? (
        <>
          <meta name="description" content={description} />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta property="og:url" content={url} />
        </>
      ) : (
        <>
          <meta name="robots" content="noindex,nofollow" />
        </>
      )}
    </Head>
  );
};
export default Meta;

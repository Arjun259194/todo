import Head from "next/head";
import { FC } from "react";

interface props {
  title?: string;
  theme?: string;
}

const Meta: FC<props> = ({ title, theme }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content={theme} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Todo App",
  theme: "#ffffff",
};

export default Meta;

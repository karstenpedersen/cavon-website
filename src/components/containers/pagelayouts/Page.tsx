import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Page: FunctionComponent<Props> = (props) => {
  const { children, title = "Cavon", description = "Cavon" } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main id="home">{children}</main>
      <Footer />
    </>
  );
};

export default Page;

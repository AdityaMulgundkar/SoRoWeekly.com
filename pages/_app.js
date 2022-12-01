import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Soft Robotics Weekly Newsletter</title>
        <meta
          name="Description"
          content="SoRo Weekly is a weekly/fortnightly newsletter, your weekly reading list - something you can skim through and keep yourself updated, in the loop with the latest in Soft Robotics."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

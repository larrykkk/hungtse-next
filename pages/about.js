import Head from "next/head";
import Header from "../components/TheHeader";
import Footer from "../components/TheFooter";

export default function About() {
  return (
    <div className={`container`}>
      <Head>
        <title>竑澤實業股份有限公司</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main>
        {/* lorem*1000 */}
        {/* <img
          src="/aaaaa.png"
          alt="d"
          style={{ width: 85 + "%", maxWidth: 600 + "px" }}
        /> */}
      </main>

      <Footer></Footer>
    </div>
  );
}

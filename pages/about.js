import Head from "next/head";
import styles from "./about.module.scss";
import Image from "next/image";

export default function About() {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/hungtse-next" : "";

  return (
    <div className={`container`}>
      <Head>
        <title>關於竑澤 | 竑澤實業股份有限公司</title>
        <meta
          name="description"
          content="竑澤成立於81 年10 月，為中華民國經濟部核准公司，並於84 年 <br />
            開始營運，至今已超過25 年，我們擁有專業的一貫作業，堅持品 <br />
            質的良好，給顧客最實在的。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.banner}>
        <Image
          src={basePath + "/image/comp3/4 關於竑澤.png"}
          alt="banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.desc}>
          <h2>廠區介紹</h2>
        </div>
      </div>

      <main></main>
    </div>
  );
}

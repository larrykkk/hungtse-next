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
          <h2>關於竑澤</h2>
        </div>
      </div>

      <main>
        <div className={styles.title} style={{ marginTop: 33 + "px" }}>
          <h3>竑澤沿革</h3>
        </div>

        <div className={`${styles.section} history`}>
          <div className="timeline-image">
            <Image src={basePath + "/image/時間軸.png"} layout="fill"></Image>
          </div>
          <div className="timeline-text">
            竑澤實業成立於民國 81 年 10 月，為中華 <br />
            民國經濟部核准公司，並於民國 84 年開 <br />
            始營運，至今已超過 25 年。我們擁有專
            <br />
            業的一貫作業，堅持品質的良好，從胚 <br />
            布開始進行初步的處理、各式加工作業 <br />
            再到後整理，竑澤都層層把關，提供客 <br />
            戶最好的成品；除了專業技術，竑澤擁 <br />
            有靈活的機動性及溝通，給顧客最實在 <br />
            的；為滿足顧客需求，竑澤不斷新增服
            <br />
            務的項目，成為最全面的印染廠。
          </div>
        </div>

        <div className={styles.title} style={{ marginTop: 33 + "px" }}>
          <h3>污水處理法 再造綠能</h3>
        </div>

        <div className={`${styles.section} sewage`}>
          <div className="sewage-text">
            自從1980年代環保意識開始受到重視，所有的工業廠都備受關注，而染整廠的用水量極大，竑澤相當重視此環境議題，將污水排放做了層層把關，定期檢測BOD、COD，再造水能源，永續自然資源。
          </div>
          <div className="sewage-image">
            <Image
              src={basePath + "/image/汙水處理 有加號-04.png"}
              layout="fill"
            ></Image>
          </div>
        </div>
      </main>
    </div>
  );
}

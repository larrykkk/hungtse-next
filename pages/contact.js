import Head from "next/head";
import styles from "./contact.module.scss";
import Image from "next/image";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Contact() {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/hungtse-next" : "";

  return (
    <div className={`container`}>
      <Head>
        <title>聯絡我們 | 竑澤實業股份有限公司</title>
        <meta
          name="description"
          content="
          竑澤實業股份有限公司位於桃園市觀音區,為棉、合成化學纖維針織品等等材質的漂染、印花、整理加工廠 - 竑澤實業股份有限公司"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.banner}>
        <Image
          src={basePath + "/image/comp3/5 聯絡我們.png"}
          alt="banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.desc}>
          <h2>聯絡我們</h2>
        </div>
      </div>

      <main>
        <div className={`${styles.section} contact-info`}>
          <div className="info-item">
            <div className="info-item-image">
              <Image
                src={basePath + "/image/聯絡我們-51.png"}
                alt="icon"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div>
              <h4>EMAIL</h4>
              <h4>hiprint.ht1@msa.hinet.net</h4>
            </div>
          </div>
          <div className="info-item">
            <div className="info-item-image">
              <Image
                src={basePath + "/image/聯絡我們-52.png"}
                alt="icon"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div>
              <h4>ADDRESS</h4>
              <h4>
                桃園縣觀音工業區工業二路23號　 23 KUNG-YEH 2 ROAD KUAN IN
                INDUSTRIAL ZONE TAO-YUAN. TAIWAN. R.O.C.
              </h4>
            </div>
          </div>
          <div className="info-item">
            <div className="info-item-image">
              <Image
                src={basePath + "/image/聯絡我們-53.png"}
                alt="icon"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div>
              <h4>PHONE</h4>
              <h4>TEL／(03)4836636~8　 FAX／(03)4836136</h4>
            </div>
          </div>
        </div>

        <div className={styles.title} style={{ marginTop: 33 + "px" }}>
          <h3>請利用下方表單 與我們聯繫</h3>
        </div>

        <div className={`${styles.section}`}>
          <form action="">
            <label for="fname" className="must">公司名稱</label> <br />
            <input type="text" id="fname" /> <br />

            <label for="fname" className="must">電子信箱</label> <br />
            <input type="text" id="fname" /><br />

            <label for="fname" className="must">聯絡人</label> <br />
            <input type="text" id="fname" /> <br />

            <label for="fname" className="must">電話</label> <br />
            <input type="text" id="fname" /> <br />

            <label for="fname">分機</label> <br />
            <input type="text" id="fname" /> <br />

            <label for="fname">傳真</label> <br />
            <input type="text" id="fname" /> <br />

            <label for="fname" className="must">布規</label> <br />
            <input type="text" id="fname" /> <br />

            <label for="content" className="must">內容</label> <br />
            <textarea
              id="content"
              name="content"
              cols="30"
              rows="10"
            ></textarea>{" "}
            <br />

            <input type="submit" value="Submit"></input>
          </form>
        </div>

        <div className={styles.title} style={{ marginTop: 33 + "px" }}>
          <h3>交通地圖</h3>
        </div>

        <div className={`${styles.section}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.034877538563!2d121.12145331500696!3d25.066806983956987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468279f950d991f%3A0x71df53c44fb5cfb3!2z56uR5r6k5a-m5qWt6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1659854533964!5m2!1szh-TW!2stw"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </div>
  );
}

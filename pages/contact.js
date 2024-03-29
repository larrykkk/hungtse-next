import Head from "next/head";
import styles from "./contact.module.scss";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import WhiteLogo from "../components/WhiteLogo.js";

export default function Contact() {
  const isProd = process.env.NODE_ENV === "production";
  const isStatic = process.env.NEXT_PUBLIC_BUILD_MODE === "static";
  const basePath = isProd && isStatic ? "/hungtse-next" : "";
  const recaptchaRef = useRef();
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
      body: JSON.stringify(Object.fromEntries(data)), // must match 'Content-Type' header
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      headers: {
        "user-agent": "Mozilla/4.0 MDN Example",
        "content-type": "application/json",
      },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      referrer: "no-referrer", // *client, no-referrer
    }).then((response) => response.json()); // 輸出成 json
  }

  function postData2(url, data) {
    // Default options are marked with *
    return fetch(url, {
      body: data, // must match 'Content-Type' header
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      headers: {
        "user-agent": "Mozilla/4.0 MDN Example",
        "content-type": "application/json",
      },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      referrer: "no-referrer", // *client, no-referrer
    }).then((response) => response.json()); // 輸出成 json
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    var formData = new FormData(document.querySelector("#contact-form"));

    setLoading(true);
    postData(basePath + `/api/email`, formData)
      .then(() => {
        alert("已寄出，感謝您的來信");
        document.getElementById("contact-form").reset();
      })
      .catch((error) => {
        console.error(error);
        alert("寄送失敗，可直接聯繫我們");
      })
      .finally(() => {
        setLoading(false);
        recaptchaRef.current.reset();
      });
  };

  function onChange(value) {
    postData2(basePath + `/api/recaptcha`, JSON.stringify({ captcha: value }))
      .then((data) => {
        if (data.success) {
          setSubmitButtonDisabled(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
            <div className="info-item-text">
              <div>EMAIL</div>
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
            <div className="info-item-text">
              <div>ADDRESS</div>
              <h4>
                桃園縣觀音工業區工業二路23號 <br />
                23 KUNG-YEH 2 ROAD KUAN IN INDUSTRIAL ZONE TAO-YUAN. TAIWAN.
                R.O.C.
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
            <div className="info-item-text">
              <div>PHONE</div>
              <h4>
                TEL／(03)4836636~8 <br />
                FAX／(03)4836136
              </h4>
            </div>
          </div>
        </div>

        <div
          className={styles.title}
          style={{
            marginTop: 33 + "px",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          <h3>請利用下方表單 與我們聯繫</h3>
          &nbsp;
          <span style={{ fontSize: "26px" }}>Contact</span>
        </div>

        <div className={`${styles.section} form-section`}>
          <form
            id="contact-form"
            action={basePath + `/api/email`}
            method="POST"
            onSubmit={handleSubmit}
          >
            <div style={{ marginRight: "5px" }}>
              <label htmlFor="company" className="must">
                公司名稱
                <span style={{ fontSize: "15px" }}> Company</span>
              </label>
              <input type="text" id="company" name="company" required />
            </div>
            <div style={{ marginLeft: "5px" }}>
              <label htmlFor="sender" className="must">
                電子信箱
                <span style={{ fontSize: "15px" }}> E-mail</span>
              </label>
              <input type="email" id="sender" name="sender" required />
            </div>
            <div style={{ width: "100%" }}>
              <label htmlFor="name" className="must">
                聯絡人
                <span style={{ fontSize: "15px" }}> Contact Person</span>
              </label>
              <input type="text" id="name" name="name" required />
            </div>
            <div style={{ width: "calc(30% - 5px)", marginRight: "5px" }}>
              <label htmlFor="number" className="must">
                電話
                <span style={{ fontSize: "15px" }}> Contact Number</span>
              </label>
              <input type="number" id="number" name="number" required />
            </div>
            <div
              style={{
                width: "calc(20% - 10px)",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              <label htmlFor="extensionNumber">
                分機 <span style={{ fontSize: "15px" }}> Extension Number</span>
              </label>
              <input type="text" id="extensionNumber" name="extensionNumber" />
            </div>
            <div style={{ width: "calc(50% - 5px)", marginLeft: "5px" }}>
              <label htmlFor="fax">
                傳真 <span style={{ fontSize: "15px" }}> Fax</span>
              </label>
              <input type="text" id="fax" name="fax" />
            </div>
            <div style={{ marginLeft: "0" }}>
              <label htmlFor="spec" className="must">
                布規
                <span style={{ fontSize: "15px" }}> Fabrics</span>
              </label>
              <input type="text" id="spec" name="spec" required />
            </div>
            <div style={{ width: "100%" }}>
              <label htmlFor="content" className="must">
                內容
                <span style={{ fontSize: "15px" }}> Processing</span>
              </label>
              <textarea
                id="content"
                name="content"
                rows="10"
                required
              ></textarea>
            </div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                "sitekeysitekeysitekeysitekeysitekeysitekeysitekey"
              }
              hl="zh-TW"
              onChange={onChange}
            />
            <input
              type="submit"
              value={loading ? "處理中..." : "提交"}
              disabled={submitButtonDisabled}
            ></input>
            <p className="tip">
              提交後即表示我同意和竑澤實業分享所提供的資訊，以獲得更多竑澤實業的服務項目說明。
            </p>
          </form>
        </div>

        <div
          className={styles.title}
          style={{
            marginTop: 33 + "px",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          <h3>交通地圖</h3>
          &nbsp;
          <span style={{ fontSize: "26px" }}>Map</span>
          <WhiteLogo r style={{ bottom: 0, right: 0 }}></WhiteLogo>
        </div>

        <div className={`${styles.section} map-section`}>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.034877538563!2d121.12145331500696!3d25.066806983956987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468279f950d991f%3A0x71df53c44fb5cfb3!2z56uR5r6k5a-m5qWt6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1659854533964!5m2!1szh-TW!2stw"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}

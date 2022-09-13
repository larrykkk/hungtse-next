import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./products.module.scss";
import { useWindowSize } from "../hooks/useWindowDimensions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import WhiteLogo from "../components/WhiteLogo.js";

export default function Products() {
  const isProd = process.env.NODE_ENV === "production";
  const isStatic = process.env.NEXT_PUBLIC_BUILD_MODE === "static";
  const basePath = isProd && isStatic ? "/hungtse-next" : "";

  const size = useWindowSize();
  const [selectd, setSelectd] = useState([]);
  const [choosed, setChoosed] = useState(false);

  const toggleSelectd = (item) => {
    if (!selectd.includes(item)) {
      setSelectd([...selectd, item]);
    } else {
      setSelectd(selectd.filter((i) => i !== item));
    }
  };

  const productsType = [
    {
      name: "寢具",
      en: "BEDDING USE",
      otherImages: [
        "寢具-133X72C 40S.jpg",
        "寢具-133X72C.jpg",
        "寢具-190T_.jpg",
      ],
    },
    {
      name: "浴袍",
      en: "BATH RODE",
      otherImages: ["浴袍-60_60C.jpg", "浴袍-96_72TC.jpg", "浴袍-R_.jpg"],
    },
    {
      name: "家飾",
      en: "FURNISHING FABRIC",
      otherImages: ["家飾-75DT.jpg", "家飾-150_170TC.jpg", "家飾-R_.jpg"],
    },
    {
      name: "成衣",
      en: "GARMENT USE",
      otherImages: ["成衣-針織1.jpg", "成衣-針織2.jpg", "成衣-剪花布.jpg"],
    },
    {
      name: "醫療",
      en: "MEDICAL USE",
      otherImages: [
        "寢具-110_52TC.jpg",
        "寢具-110_52TC(1).jpg",
        "寢具-110x76TC.jpg",
      ]
    },
    {
      name: "迷彩",
      trueName: "國內外軍用及成衣用迷彩", 
      en: "CAMOUFLAGE",
      otherImages: ["迷彩-75D.jpg", "迷彩-500D_N_.jpg", "迷彩-N_.jpg"],
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      <Head>
        <title>產品項目 | 竑澤實業股份有限公司</title>
        <meta
          name="description"
          content="提供以下材質的布料印染整理:棉、人造棉、尼龍、針織布、CVC、T/C、T/R、N/C、N/T、彈性纖維。布料用途:寢具、浴袍、傢飾、成衣、醫療、迷彩。"
        />
      </Head>

      <div className={styles.banner}>
        <Image
          src={basePath + "/image/comp3/2 產品項目.png"}
          alt="banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.desc}>
          <h3>產品項目</h3>
        </div>
      </div>

      <WhiteLogo l style={{ bottom: 0, left: 0 }}></WhiteLogo>

      <main>
        <div
          className={styles.title}
          style={{
            marginTop: 33 + "px",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          布種列表&nbsp;
          <span style={{ fontSize: "26px" }}>Fabrics</span>
        </div>
        <div className={styles.section} style={{ position: "relative" }}>
          <Image
            src={basePath + "/image/布種一覽-42.png"}
            alt="布種一覽"
            width={1200}
            height={285}
          />
        </div>

        <div
          className={styles.title}
          style={{
            marginTop: 33 + "px",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          布料用途 &nbsp;
          <span style={{ fontSize: "26px" }}>Functions</span>
          <WhiteLogo r style={{ bottom: 50, right: 0 }}></WhiteLogo>
        </div>
        <div className={`${styles.section}`}>
          {size.width > 767 ? (
            <div className="product-type-choose white-section">
              {productsType.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`${
                      selectd.includes(item.name) ? "selected" : ""
                    }`}
                    onClick={() => toggleSelectd(item.name)}
                  >
                    {item.name}
                    <div style={{ fontSize: "10px" }}>{item.en}</div>
                  </button>
                );
              })}
            </div>
          ) : (
            <>
              <div className="product-type-checkbox white-section">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setChoosed(!choosed)}
                >
                  <h3 style={{ fontSize: "20px" }}>
                    依用途選擇(未選擇顯示全部)
                  </h3>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ marginLeft: "auto" }}
                  />
                </div>
                {choosed ? (
                  <div className="checkboxs">
                    {productsType.map((item) => {
                      return (
                        <div key={item.name + "input"}>
                          <input
                            type="checkbox"
                            id={item.name}
                            onClick={() => toggleSelectd(item.name)}
                          ></input>
                          <label htmlFor={item.name}>
                            {item.name}{" "}
                            <span style={{ fontSize: "14px" }}>{item.en}</span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </>
          )}

          {size.width > 767 ? (
            <div className="Thumbnail white-section">
              {productsType
                .filter((x) => (selectd.length ? selectd.includes(x.name) : x))
                .map((item, index) => {
                  return (
                    <div key={index} id={item.name}>
                      <div className="product-type-name">
                        {item.trueName || item.name} {item.en}
                      </div>
                      <div className="product-type-Thumbnail">
                        <div className="product-type-Thumbnail-main">
                          <Image
                            src={`${basePath}/image/comp3/${item.name}-總覽.jpg`}
                            alt={`${item.name}-總覽`}
                            width={1145}
                            height={796}
                          />
                        </div>
                        <div
                          className="product-type-Thumbnail-other"
                          style={{
                            width: "100%",
                            height: "250px",
                          }}
                        >
                          {item.otherImages.map((subItem, index) => {
                            return (
                              <div key={index}>
                                <Image
                                  src={`${basePath}/image/comp3/${subItem}`}
                                  alt=""
                                  layout="fill"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="Thumbnail white-section">
              {productsType
                .filter((x) => (selectd.length ? selectd.includes(x.name) : x))
                .map((item, index) => {
                  return (
                    <div key={index} id={item.name}>
                      <div className="product-type-name">
                        {item.trueName || item.name} {item.en}
                      </div>
                      <div className="product-type-Thumbnail ">
                        <div
                          className="product-type-Thumbnail-other horizontal-scroll"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="horizontal-scroll-item">
                            <Image
                              src={`${basePath}/image/comp3/${item.name}-總覽.jpg`}
                              alt={`${item.name}-總覽`}
                              layout="fill"
                            />
                          </div>

                          {item.otherImages.map((subItem, index) => {
                            return (
                              <div
                                key={index}
                                className="horizontal-scroll-item"
                              >
                                <Image
                                  src={`${basePath}/image/comp3/${subItem}`}
                                  alt=""
                                  layout="fill"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

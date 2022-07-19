import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./products.module.scss";
import { useWindowSize } from "../hooks/useWindowDimensions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
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

  const images = {
    mainImage:
      "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    otherImages: [
      {
        image:
          "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1F",
        name: "棉",
      },
      {
        image:
          "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1F",
        name: "尼龍",
      },
      {
        image:
          "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1F",
        name: "人造絲",
      },
    ],
  };
  const productsType = [
    {
      name: "寢具",
      ...images,
    },
    {
      name: "浴袍",
      ...images,
    },
    {
      name: "傢飾",
      ...images,
    },
    {
      name: "成衣",
      ...images,
    },
    {
      name: "醫療",
      ...images,
    },
    {
      name: "迷彩",
      ...images,
    },
  ];

  return (
    <div>
      <Head>
        <title>產品項目 | 竑澤實業股份有限公司</title>
        <meta
          name="description"
          content="提供以下材質的布料印染整理:棉、人造棉、尼龍、針織布、CVC、T/C、T/R、N/C、N/T、彈性纖維。布料用途:寢具、浴袍、傢飾、成衣、醫療、迷彩。"
        />
      </Head>

      <div className={styles.banner}>
        <div className={styles.desc}>
          <h3>產品項目</h3>
        </div>
      </div>

      <main>
        <div className={styles.title} style={{ marginTop: 33 + "px" }}>
          布種列表
        </div>
        <div className={styles.section}>
          <Image
            src="/布種一覽-42.png"
            alt="布種一覽"
            width={1200}
            height={285}
          />
        </div>
        <div className={styles.title} style={{ marginTop: 33 + "px" }}>
          布料用途
        </div>
        <div className={`${styles.section} `}>
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
                          <label htmlFor={item.name}>{item.name}</label>
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
                      <div className="product-type-name">{item.name}</div>
                      <div className="product-type-Thumbnail">
                        <div className="product-type-Thumbnail-main">
                          <Image
                            src={item.mainImage}
                            alt=""
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
                                  src={subItem.image}
                                  alt=""
                                  layout="fill"
                                />
                                <span>{subItem.name}</span>
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
                      <div className="product-type-name">{item.name}</div>
                      <div className="product-type-Thumbnail ">
                        <div
                          className="product-type-Thumbnail-other horizontal-scroll"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className="horizontal-scroll-item">
                            <Image
                              src={item.mainImage}
                              alt="產品主圖"
                              layout="fill"
                            />
                            {/* <span>{subItem.name}</span> */}
                          </div>

                          {item.otherImages.map((subItem, index) => {
                            return (
                              <div
                                key={index}
                                className="horizontal-scroll-item"
                              >
                                <Image
                                  src={subItem.image}
                                  alt=""
                                  layout="fill"
                                />
                                <span>{subItem.name}</span>
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

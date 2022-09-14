import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import WhiteLogo from "../components/WhiteLogo.js";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";

import { useWindowSize } from "../hooks/useWindowDimensions.js";

export default function Home() {
  const isProd = process.env.NODE_ENV === "production";
  const isStatic = process.env.NEXT_PUBLIC_BUILD_MODE === "static";
  const basePath = isProd && isStatic ? "/hungtse-next" : "";

  const size = useWindowSize();
  const swiperSlides = useRef();

  const [slides, setSlides] = useState([
    {
      title: "染色",
      en: "DYEING",
      name: "寢具-133X72C 40S",
    },
    {
      title: "特殊印花",
      en: "ENGINEERED PRINT",
      name: "寢具-133X72C",
    },
    {
      title: "醫療",
      en: "MEDICAL USE",
      name: "醫療-總覽",
    },
    {
      title: "寢具、成衣",
      en: "BEDDING USE / GARMENT USE",
      name: "寢具-總覽",
    },
    {
      title: "國內外軍用\n及成衣用迷彩",
      en: "CAMOUFLAGE",
      name: "迷彩-總覽",
    },
  ]);

  function createMarkup(html) {
    return { __html: html };
  }

  function MyComponent(html) {
    return <div dangerouslySetInnerHTML={createMarkup(html)} />;
  }

  const [equipment, setEquipment] = useState([
    {
      id: 1,
      name: "落布機",
      en: "DOFFING MACHINE",
    },
    {
      id: 2,
      name: "高溫染色機",
      en: "HIGH TEMPERATURE DYEING MACHINE",
    },
    {
      id: 3,
      name: "烘乾機",
      en: "DRYING MACHINE",
    },
    {
      id: 4,
      name: "蒸箱",
      en: "STEAM COTTAGE",
    },
    {
      id: 5,
      name: "打樣室",
      en: "SAMPLE ROOM",
    },
    {
      id: 6,
      name: "定型機",
      en: "SETTING MACHINE",
    },
    {
      id: 7,
      name: "印花機",
      en: "PRINTING MACHINE",
    },
    {
      id: 8,
      name: "包裝機",
      en: "PACKING MACHINE",
    },
  ]);

  const [height, setHeight] = useState(265);

  // This function calculates width and height of the list
  const getListSize = () => {
    if (swiperSlides.current) {
      const newHeight = swiperSlides.current.clientHeight;
      setHeight(newHeight);
    }
  };

  // Get 'width' and 'height' after the initial render and every time the list changes
  useEffect(() => {
    getListSize();
  }, []);

  // Update 'width' and 'height' when the window resizes
  useEffect(() => {
    window.addEventListener("resize", getListSize);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>首頁 | 竑澤實業股份有限公司</title>
        <meta
          name="description"
          content="
          竑澤實業股份有限公司位於桃園市觀音區,為棉、合成化學纖維針織品等等材質的漂染、印花、整理加工廠 - 竑澤實業股份有限公司"
        />
      </Head>

      <div
        className={styles.banner}
        // style={{
        //   backgroundImage: `url(/_123282362_hi042879001.jpg)`,
        // }}
      >
        <Image
          src={basePath + "/image/1 首頁_漸層.png"}
          alt="banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div
          className={styles.desc}
          style={{
            fontStyle: "normal",
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            color: "#062959",
          }}
        >
          <h3>品質第一，堅持做到最好</h3>
          <h2 style={{ marginTop: "20px" }}>
            竑澤成立於 81 年10 月，為中華民國經濟部核准公司，並於84 年 <br />
            開始營運，至今已超過25 年，我們擁有專業的一貫作業，堅持品 <br />
            質的良好，給顧客最實在的。
          </h2>
        </div>
      </div>

      <main>
        <div
          className={styles.title}
          style={{
            marginTop: 33 + "px",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          竑澤優勢&nbsp;
          <span style={{ fontSize: "26px" }}>Advantage</span>
        </div>
        <div className={styles.section}>
          <div className={`${styles.content} ${styles.advantage}`}>
            <div>
              <div className={styles["advantage-img"]}>
                <Image
                  src={basePath + "/image/機動性高.png"}
                  alt="機動性高 icon"
                  layout="fill"
                />
              </div>
              <span>機動性高</span>
              <span className={styles["en-text"]}>SWIFTNESS</span>
            </div>
            <div>
              <div className={styles["advantage-img"]}>
                <Image
                  src={`${basePath}/image/品質穩定.png`}
                  alt="品質穩定 icon"
                  layout="fill"
                />
              </div>
              <span>品質穩定</span>
              <span className={styles["en-text"]}>STABILIZATION</span>
            </div>
            <div>
              <div className={styles["advantage-img"]}>
                <Image
                  src={`${basePath}/image/交貨守時.png`}
                  alt="交貨守時 icon"
                  layout="fill"
                />
              </div>
              <span>交貨守時</span>
              <span className={styles["en-text"]}>ACCURATE DELIVERY</span>
            </div>
            <div>
              <div className={styles["advantage-img"]}>
                <Image
                  src={basePath + "/image/服務多元.png"}
                  alt="服務多元 icon"
                  layout="fill"
                />
              </div>
              <span>服務多元</span>
              <span className={styles["en-text"]}>DIVERSIFIED PRODUCT</span>
            </div>
            <div>
              <div className={styles["advantage-img"]}>
                <Image
                  src={basePath + "/image/價格合理.png"}
                  alt="價格合理 icon"
                  layout="fill"
                />
              </div>
              <span>價格合理</span>
              <span className={styles["en-text"]}>REASONABLY PRICED</span>
            </div>
          </div>
          <Link href="/about">
            <button className={styles.button}>關於竑澤</button>
          </Link>
        </div>

        <div
          className={styles.title}
          style={{
            marginTop: 33 + "px",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          產品項目&nbsp;
          <span style={{ fontSize: "26px" }}>Products</span>
        </div>
        <div className={`${styles.section}`}>
          {size.width > 767 ? (
            <>
              <Swiper
                slidesPerView={3}
                spaceBetween={25}
                slidesPerGroup={3}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".swiper-button-next.test1",
                  prevEl: ".swiper-button-prev.test1",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper1"
                key={1}
                style={{ marginBottom: "70px" }}
                // simulateTouch={false}
              >
                {slides.map((item) => {
                  return (
                    <SwiperSlide
                      key={item.title}
                      data-id={item.title}
                      ref={swiperSlides}
                    >
                      <div
                        style={{
                          width: "100%",
                          maxWidth: "350px",
                          height: "265px",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={`${basePath}/image/comp3/${item.name}.jpg`}
                          alt={item.title}
                          layout="fill"
                        />
                      </div>
                      <div
                        className={`${styles.swiperDesc} swiper-no-swiping`}
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {MyComponent(item.title)}
                      </div>
                      <span
                        className={`${styles["en-text"]} swiper-no-swiping`}
                        style={{ color: "#343F52", fontWeight: 600 }}
                      >
                        {item.en}
                      </span>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div
                className="swiper-button-prev test1"
                style={{
                  top: `${height / 2}px`,
                }}
              ></div>
              <div
                className="swiper-button-next test1"
                style={{
                  top: `${height / 2}px`,
                }}
              ></div>
            </>
          ) : (
            <div className={styles.products}>
              {slides.map((item) => {
                return (
                  <div className={styles["mobile-products"]} key={item.title}>
                    <div
                      style={{
                        marginBottom: "12px",
                        width: "100%",
                        maxWidth: "300px",
                        height: "150px",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={`${basePath}/image/comp3/${item.name}.jpg`}
                        alt={item.title}
                        layout="fill"
                      />
                    </div>
                    <span
                      className={`${styles["mobile-products-desc"]} swiper-no-swiping`}
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {MyComponent(item.title)}
                    </span>
                    <div
                      className={`${styles["en-text"]} swiper-no-swiping`}
                      style={{ color: "#343F52", fontWeight: 600 }}
                    >
                      {item.en}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div>
            <Link href="/products">
              <button className={styles.button}>了解更多</button>
            </Link>
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
          設備介紹&nbsp;
          <span style={{ fontSize: "26px" }}>Equipment</span>
          <WhiteLogo r style={{ bottom: 50, right: 0 }}></WhiteLogo>
        </div>
        <div className={styles.section}>
          {size.width > 767 ? (
            <>
              <Swiper
                slidesPerView={3}
                spaceBetween={25}
                slidesPerGroup={3}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".swiper-button-next.test2",
                  prevEl: ".swiper-button-prev.test2",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper2"
                key={2}
                style={{ marginBottom: "70px" }}
              >
                {equipment.map((item) => {
                  return (
                    <SwiperSlide
                      key={item.id}
                      data-id={item.id}
                      ref={swiperSlides}
                    >
                      <div
                        style={{
                          width: "100%",
                          maxWidth: "350px",
                          height: "265px",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={`${basePath}/image/comp3/${item.name}-1.jpg`}
                          alt={item.name}
                          layout="fill"
                        />
                      </div>
                      <div className={`${styles.swiperDesc} swiper-no-swiping`}>
                        {MyComponent(item.name)}
                      </div>
                      <div
                        className={`${styles["en-text"]} swiper-no-swiping`}
                        style={{ color: "#343F52", fontWeight: 600 }}
                      >
                        {item.en}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div
                className="swiper-button-prev test2"
                style={{
                  top: `${height / 2}px`,
                }}
              ></div>
              <div
                className="swiper-button-next test2"
                style={{
                  top: `${height / 2}px`,
                }}
              ></div>
            </>
          ) : (
            <div className={`${styles.equipment} horizontal-scroll`}>
              {equipment.map((item) => {
                return (
                  <div className={styles["mobile-equipment"]} key={item.id}>
                    <div
                      style={{
                        marginBottom: "12px",
                        position: "relative",
                        width: "100%",
                        maxWidth: "300p",
                        height: "150px",
                      }}
                    >
                      <Image
                        src={`${basePath}/image/comp3/${item.name}-1.jpg`}
                        alt={item.name}
                        layout="fill"
                      />
                    </div>
                    <span className={styles["mobile-equipment-desc"]}>
                      {MyComponent(item.name)}
                    </span>
                    <div
                      className={`${styles["en-text"]}`}
                      style={{ color: "#343F52", fontWeight: 600 }}
                    >
                      {item.en}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <Link href="/factory">
            <button className={styles.button}>了解更多</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

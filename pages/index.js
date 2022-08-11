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
      name: "寢具-133X72C 40S",
    },
    {
      title: "特殊印花",
      name: "寢具-133X72C",
    },
    {
      title: "醫療",
      name: "醫療-總覽",
    },
    {
      title: "寢具、成衣",
      name: "寢具-總覽",
    },
    {
      title: "迷彩",
      name: "迷彩-總覽",
    },
  ]);

  const [equipment, setEquipment] = useState([
    {
      id: 1,
      name: "落布機",
    },
    {
      id: 2,
      name: "高溫染色機",
    },
    {
      id: 3,
      name: "烘乾機",
    },
    {
      id: 4,
      name: "蒸箱",
    },
    {
      id: 5,
      name: "打樣室",
    },
    {
      id: 6,
      name: "定型機",
    },
    {
      id: 7,
      name: "印花機",
    },
    {
      id: 8,
      name: "包裝機",
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
          src={basePath + "/image/comp3/1 首頁.png"}
          alt="banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.desc}>
          <h3>品質第一，堅持做到最好</h3>
          <h2 style={{ marginTop: "20px" }}>
            竑澤成立於 81 年10 月，為中華民國經濟部核准公司，並於84 年 <br />
            開始營運，至今已超過25 年，我們擁有專業的一貫作業，堅持品 <br />
            質的良好，給顧客最實在的。
          </h2>
        </div>
      </div>

      <main>
        <div className={styles.title} style={{ marginTop: 33 + "px" }}>
          竑澤優勢
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
            </div>
          </div>
          <Link href="/image/about">
            <button className={styles.button}>關於竑澤</button>
          </Link>
        </div>

        <div className={styles.title}>產品項目</div>
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
                      <div className={styles.swiperDesc}>{item.title}</div>
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
                    <span className={styles["mobile-products-desc"]}>
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          <div>
            <Link href="/about">
              <button className={styles.button}>了解更多</button>
            </Link>
          </div>
        </div>

        <div className={styles.title}>
          設備介紹
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
                      <div className={styles.swiperDesc}>{item.name}</div>
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
                      {item.name}
                    </span>
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

import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

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
  const basePath = isProd ? "/hungtse-next" : "";

  const size = useWindowSize();
  const swiperSlides = useRef();

  const [slides, setSlides] = useState([
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "染色",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "特殊印花",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "醫療",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "寢具、成衣",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "迷彩",
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
      name: "落布機",
    },
    {
      id: 4,
      name: "落布機",
    },
    {
      id: 5,
      name: "落布機",
    },
    {
      id: 6,
      name: "落布機",
    },
    {
      id: 7,
      name: "落布機",
    },
    {
      id: 8,
      name: "落布機",
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
  }, [swiperSlides.current]);

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
          content="竑澤實業成立於 81 年10 月，為中華民國經濟部核准公司，並於84 年開始營運，至今已超過25 年，我們擁有專業的一貫作業，堅持品質的良好，給顧客最實在的。"
        />
      </Head>

      <div
        className={styles.banner}
        // style={{
        //   backgroundImage: `url(/_123282362_hi042879001.jpg)`,
        // }}
      >
        <Image
          src={basePath + "/image/_123282362_hi042879001.jpg"}
          alt="banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.desc}>
          <h3>品質第一，堅持做到最好</h3>
          <h2 style={{ marginTop: "20px" }}>
            竑澤成立於81 年10 月，為中華民國經濟部核准公司，並於84 年 <br />
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
              <Image
                src={basePath + "/image/機動性高.png"}
                alt="機動性高 icon"
                width={"100%"}
                height={"100%"}
              />
              <span>機動性高</span>
            </div>
            <div>
              <Image
                src={`${basePath}/image/品質穩定.png`}
                alt="品質穩定 icon"
                width={"100%"}
                height={"100%"}
              />
              <span>品質穩定</span>
            </div>
            <div>
              <Image
                src={`${basePath}/image/交貨守時.png`}
                alt="交貨守時 icon"
                width={"100%"}
                height={"100%"}
              />
              <span>交貨守時</span>
            </div>
            <div>
              <Image
                src={basePath + "/image/服務多元.png"}
                alt="服務多元 icon"
                width={"100%"}
                height={"100%"}
              />
              <span>服務多元</span>
            </div>
            <div>
              <Image
                src={basePath + "/image/價格合理.png"}
                alt="價格合理 icon"
                width={"100%"}
                height={"100%"}
              />
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
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                key={1}
                style={{ marginBottom: "70px" }}
              >
                {slides.map((item) => {
                  return (
                    <SwiperSlide
                      key={item.id}
                      data-id={item.id}
                      style={{ height: "265px" }}
                      ref={swiperSlides}
                    >
                      <div>
                        <Image src={item.img} alt={item.title} layout="fill" />
                      </div>
                      <span className={styles.swiperDesc}>{item.title}</span>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div
                className="swiper-button-prev"
                style={{
                  top: `${height / 2}px`,
                }}
              ></div>
              <div
                className="swiper-button-next"
                style={{
                  top: `${height / 2}px`,
                }}
              ></div>
            </>
          ) : (
            <div className={styles.products}>
              {slides.map((item) => {
                return (
                  <div className={styles["mobile-products"]} key={item.id}>
                    <div style={{ marginBottom: "12px" }}>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={300}
                        height={"100%"}
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

        <div className={styles.title}>設備介紹</div>
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
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                // loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                key={1}
                style={{ marginBottom: "70px" }}
              >
                {equipment.map((item) => {
                  return (
                    <SwiperSlide
                      key={item.id}
                      data-id={item.id}
                      style={{ height: "265px" }}
                      ref={swiperSlides}
                    >
                      <div>
                        <Image
                          src={`${basePath}/image/comp3/${item.name}-1.jpg`}
                          alt={item.name}
                          layout="fill"
                        />
                      </div>
                      <span className={styles.swiperDesc}>{item.name}</span>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div
                className="swiper-button-prev"
                style={{
                  top: `${height / 2}px`,
                }}
              ></div>
              <div
                className="swiper-button-next"
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
                    <div style={{ marginBottom: "12px" }}>
                      <Image
                        src={`${basePath}/image/${item.name}-1.jpg`}
                        alt={item.name}
                        width={300}
                        height={"100%"}
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

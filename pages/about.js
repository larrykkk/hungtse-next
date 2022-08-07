import Head from "next/head";
import styles from "./about.module.scss";
import Image from "next/image";
import { ImageMap } from "@qiuz/react-image-map";
import { useState, useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import photoswipe from "photoswipe";

export default function About() {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/hungtse-next" : "";

  let lightbox = null;
  const [target, setTarget] = useState(null);
  const mapArea = [
    {
      left: "0%",
      top: "13.5%",
      height: "5.5%",
      width: "100%",
      onMouseOver: () => onMouseOver(),
      onMouseLeave: () => onMouseLeave(),
      imgname: ["計量堰.jpg"],
    },
    {
      left: "0%",
      top: "34.5%",
      height: "7.5%",
      width: "100%",
      onMouseOver: () => onMouseOver(),
      onMouseLeave: () => onMouseLeave(),
      imgname: ["_LIB2263-加壓浮除槽.jpg"],
    },
    {
      left: "0%",
      top: "42.5%",
      height: "11.5%",
      width: "100%",
      onMouseOver: () => onMouseOver(),
      onMouseLeave: () => onMouseLeave(),
      imgname: [
        "_LIB2264-接觸氧化槽1.jpg",
        "接觸氧化槽2.jpg",
        "_LIB2267-接觸氧化槽3.jpg",
      ],
    },
    {
      left: "0%",
      top: "56.5%",
      height: "4.8%",
      width: "100%",
      onMouseOver: () => onMouseOver(),
      onMouseLeave: () => onMouseLeave(),
      imgname: ["快混槽.jpg"],
    },
    {
      left: "0%",
      top: "63%",
      height: "6.5%",
      width: "100%",
      onMouseOver: () => onMouseOver(),
      onMouseLeave: () => onMouseLeave(),
      imgname: ["慢混槽.jpg"],
    },
    {
      left: "0%",
      top: "71%",
      height: "5%",
      width: "100%",
      onMouseOver: () => onMouseOver(),
      onMouseLeave: () => onMouseLeave(),
      imgname: ["_LIB2269-沉澱槽.jpg"],
    },
    {
      left: "0%",
      top: "78%",
      height: "5.5%",
      width: "100%",
      onMouseOver: () => onMouseOver(),
      onMouseLeave: () => onMouseLeave(),
      imgname: ["_LIB2270-放流槽.jpg"],
    },
    {
      left: "0%",
      top: "85.5%",
      height: "5%",
      width: "100%",
      onMouseOver: () => onMouseOver(),
      onMouseLeave: () => onMouseLeave(),
      imgname: [
        "_LIB2278-淤泥帶濾式脫水機.jpg",
        "_LIB2279-淤泥帶濾式脫水機.jpg",
      ],
    },
    {
      left: "0%",
      top: "92%",
      height: "7%",
      width: "100%",
      onMouseOver: () => onMouseOver(),
      onMouseLeave: () => onMouseLeave(),
      imgname: ["_LIB2205-淤泥烘乾機.jpg"],
    },
  ];

  const [options, setOptions] = useState({
    dataSource: [
      ...((mapArea[0] && mapArea[0].imgname) || []).map((x) => ({
        src: `${basePath}/image/${x}`,
        width: 1200,
        height: 800,
        alt: x,
      })),
    ],
    showHideAnimationType: "none",
    pswpModule: photoswipe,
  });

  const onMapClick = (area, index) => {
    setTarget(index);

    setOptions({
      dataSource: [
        ...((mapArea[index] && mapArea[index].imgname) || []).map((x) => ({
          src: `${basePath}/image/${x}`,
          width: 1200,
          height: 800,
          alt: x,
        })),
      ],
      showHideAnimationType: "none",
      pswpModule: photoswipe,
    });
  };

  const onMouseOver = () => {
    if (typeof window !== "undefined") {
      document.body.style.cursor = "pointer";
    }
  };

  const onMouseLeave = () => {
    if (typeof window !== "undefined") {
      document.body.style.cursor = "auto";
    }
  };

  useEffect(() => {
    lightbox = new PhotoSwipeLightbox(options);
    lightbox.init();

    lightbox.on("close", () => {
      setTarget(null);
    });

    if (target !== null) {
      lightbox.loadAndOpen(0);
    }
  }, [target]);

  return (
    <div className={`container about`}>
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
            竑澤實業成立於民國 81 年 10 月，為中華 民國經濟部核准公司，並於民國
            84 年開始營運，至今已超過 25
            年。我們擁有專業的一貫作業，堅持品質的良好，從胚布開始進行初步的處理、各式加工作業再到後整理，竑澤都層層把關，提供客戶最好的成品；除了專業技術，竑澤擁有靈活的機動性及溝通，給顧客最實在的；為滿足顧客需求，竑澤不斷新增服
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
            <ImageMap
              className="usage-map"
              src={basePath + "/image/汙水處理 有加號-04.png"}
              map={mapArea}
              onMapClick={onMapClick}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

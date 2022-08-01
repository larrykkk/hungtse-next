import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./factory.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useWindowSize } from "../hooks/useWindowDimensions.js";
import { useState, useEffect } from "react";

import PhotoSwipeLightbox from "photoswipe/lightbox";

export default function Factory() {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/hungtse-next" : "";
  const basePath2 = isProd ? "/hungtse-next" : "";

  const size = useWindowSize();

  const [equipment, setEquipment] = useState([
    {
      name: "落布機",
      description:
        "將要進行染色或上膠的布料作前整理，適用於針織圓筒布、毛巾布、平織等胚布。",
    },
    {
      name: "高溫染色機",
      description:
        "通過染料或顏料和紡織物發生物理或物理化學的結合，浸入一定溫度的染料水溶液中，使紡織物獲得鮮豔、均勻和堅牢色澤的加工過程；除了染色，還可進行精煉，其目的為去除胚布本身的雜質、油脂等等，以提升染色的品質。",
    },
    {
      name: "烘乾機",
      description: "靠熱能或電磁能，使溼織物內的水分蒸發成爲乾燥的織物。",
    },
    {
      name: "蒸箱",
      description:
        "使織物在不同溫溼度條件下完成染料、化學品對纖維的滲透、反應和色牢度。",
    },
    {
      name: "打樣室",
      description:
        "根據客戶的色樣要求，確定原料及染色配比，安排不同的染色組合，進行小樣打色。",
    },
    {
      name: "定型機",
      description:
        "用來穩定布料的大小、顏色及縮水程度。其中又分為前定和成定；前定是在染布後先將部分特殊布種做一次定型，具有彈性的布料，則需要較多次的定型，才能維持其彈性及品質；成定則是染布後的最終定型，這個程序對每一匹布料都是必需的，布料在染色或者烘乾之後，預防產生縮水、扭曲、伸縮度不佳等情形。",
    },
    {
      name: "印花機",
      description:
        "利用鏤空花紋的圓筒狀鎳皮篩網，按一定順序安裝在循環運行的橡膠導帶上方，並與導帶同步轉動。印花時，色漿輸入網內，貯留在網底，圓網隨導帶轉動時，緊壓在網底的刮刀與花網發生相對刮壓，色漿透過網上花紋到達織物表面。",
    },
    {
      name: "包裝機",
      description:
        "以粗紙管為中心，將一大匹布慢慢的捆，捆成差不多等重量的成布，裹上外包裝，等待出貨。",
    },
  ]);

  useEffect(() => {
    let lightbox;
    equipment.forEach((e) => {
      lightbox = new PhotoSwipeLightbox({
        gallery: `#equipment-item-${e.name}`,
        children: "a",
        pswpModule: () => import("photoswipe"),
      });
      lightbox.init();
    });

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className={`container`}>
      <Head>
        <title>廠區介紹 | 竑澤實業股份有限公司</title>
        <meta
          name="description"
          content="
            服務項目:
            精煉 Scouring
            漂白 Bleaching
            染色 Piece Dyed
            反應性染料 Reactive Dye
            分散性染料 Disperse Dye
            酸性染料 Acid Dye
            反光印花 Reflective Fabrics
            夜光印花 Luminous Printing
            感溫變色 Chameleon Paint
            雷射七彩印花 Laser Colorful
            醫療用特殊印花 Medical
            國內外軍用迷彩 Pattern Painting
            拔印 Discharge Printing
            緹花 Jacquard Pattern
            口水紋 Water Mark
            撥水 Water-Repellent Finishing
            防火 Flame Retardant Finishing
            樹酯加工 Resin Finishing
            柔軟 Mild finishing
            吸濕排汗 Wicking Finishing
            防蟎抗菌 Anti-mite and Anti-bacterial Fabric Finishing
            燒花 Burnt-out
            壓光 Calendering
            防縮 Sanforizing
          "
        />
      </Head>

      <div
        className={styles.banner}
        // style={{
        //   backgroundImage: `url(/_123282362_hi042879001.jpg)`,
        // }}
      >
        <Image
          src={basePath + "/image/comp3/3 廠區介紹.png"}
          alt="banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.desc}>
          <h2>廠區介紹</h2>
        </div>
      </div>

      <main>
        <div className={styles.title} style={{ marginTop: 33 + "px" }}>
          <h3>服務項目</h3>
        </div>

        <div className={`${styles.section} services`}>
          <OverlayTrigger
            trigger="click"
            placement={size.width > 767 ? "left" : "auto"}
            rootClose={true}
            overlay={
              <Popover id={`popover-positioned`}>
                <Popover.Body
                  style={{
                    border: "1px solid #71A820",
                    borderRadius: "30px",
                    color: "#71A820",
                  }}
                >
                  <table>
                    <tr>
                      <td>精煉</td>
                      <td>Scouring</td>
                    </tr>
                    <tr>
                      <td>漂白</td>
                      <td>Bleaching</td>
                    </tr>
                    <tr>
                      <td>染色</td>
                      <td>Piece Dyed</td>
                    </tr>
                  </table>
                </Popover.Body>
              </Popover>
            }
          >
            <div>
              <Image
                src={basePath + "/image/竑澤服務項目-44.png"}
                alt="缸染 Dyeing"
                width={"150px"}
                height={"150px"}
              />
              <div>
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  fontSize={18}
                  style={{}}
                  className="left"
                />
                <span style={{ color: "#71A820" }}>
                  缸染 <br />
                  <span>Dyeing</span>
                </span>
              </div>
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            trigger="click"
            placement={size.width > 767 ? "left" : "auto"}
            rootClose={true}
            overlay={
              <Popover id={`popover-positioned`} className="printing">
                <Popover.Body
                  style={{
                    border: "1px solid #EC8936",
                    borderRadius: "30px",
                    color: "#EC8936",
                  }}
                >
                  <table>
                    <tr>
                      <td>反應性染料</td>
                      <td>Reactive Dye</td>
                    </tr>
                    <tr>
                      <td>分散性染料</td>
                      <td>Disperse Dye</td>
                    </tr>
                    <tr>
                      <td>酸性染料</td>
                      <td>Acid Dye</td>
                    </tr>
                    <tr>
                      <td>反光印花</td>
                      <td>Reflective Fabrics</td>
                    </tr>
                    <tr>
                      <td>夜光印花</td>
                      <td>Luminous Printing</td>
                    </tr>
                    <tr>
                      <td>感溫變色</td>
                      <td>Chameleon Paint</td>
                    </tr>
                    <tr>
                      <td>雷射七彩印花</td>
                      <td>Laser Colorful</td>
                    </tr>
                    <tr>
                      <td>醫療用特殊印花</td>
                      <td>Medical</td>
                    </tr>
                    <tr>
                      <td>國內外軍用迷彩</td>
                      <td>Pattern Painting</td>
                    </tr>
                    <tr>
                      <td>拔印</td>
                      <td>Discharge Printing</td>
                    </tr>
                    <tr>
                      <td>緹花</td>
                      <td>Jacquard Pattern</td>
                    </tr>
                    <tr>
                      <td>口水紋</td>
                      <td>Water Mark</td>
                    </tr>
                  </table>
                </Popover.Body>
              </Popover>
            }
          >
            <div>
              <Image
                src={basePath + "/image/竑澤服務項目-46.png"}
                alt="印花 Printing"
                width={"150px"}
                height={"150px"}
              />
              <div>
                <span style={{ color: "#EC8936" }}>
                  印花 <br /> <span>Printing</span>
                </span>
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  fontSize={18}
                  style={{}}
                  className="right"
                />
              </div>
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            trigger="click"
            placement={size.width > 767 ? "left" : "auto"}
            rootClose={true}
            overlay={
              <Popover id={`popover-positioned`} className="setting">
                <Popover.Body
                  style={{
                    border: "1px solid #3A6A9A",
                    borderRadius: "30px",
                    color: "#3A6A9A",
                  }}
                >
                  <table width={"300px"}>
                    <tr>
                      <td>撥水</td>
                      <td>Water-Repellent Finishing</td>
                    </tr>
                    <tr>
                      <td>防火</td>
                      <td>Flame Retardant Finishing</td>
                    </tr>
                    <tr>
                      <td>樹酯加工</td>
                      <td>Resin Finishing</td>
                    </tr>
                    <tr>
                      <td>柔軟</td>
                      <td>Mild finishing</td>
                    </tr>
                    <tr>
                      <td>吸濕排汗</td>
                      <td>Wicking Finishing</td>
                    </tr>
                    <tr>
                      <td>防蟎抗菌</td>
                      <td>Anti-mite and Anti-bacterial Fabric Finishing</td>
                    </tr>
                    <tr>
                      <td>燒花</td>
                      <td>Burnt-out</td>
                    </tr>
                  </table>
                </Popover.Body>
              </Popover>
            }
          >
            <div>
              <Image
                src={basePath + "/image/竑澤服務項目-45.png"}
                alt="定型 Setting"
                width={"150px"}
                height={"150px"}
              />
              <div>
                <span style={{ color: "#3A6A9A" }}>
                  定型 <br /> <span>Setting</span>
                </span>
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  fontSize={18}
                  style={{}}
                  className="left"
                />
              </div>
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            trigger="click"
            placement={size.width > 767 ? "right" : "auto"}
            rootClose={true}
            overlay={
              <Popover id={`popover-positioned`}>
                <Popover.Body
                  style={{
                    border: "1px solid #A73374",
                    borderRadius: "30px",
                    color: "#A73374",
                  }}
                >
                  <table>
                    <tr>
                      <td>壓光</td>
                      <td>Calendering</td>
                    </tr>
                    <tr>
                      <td>防縮</td>
                      <td>Sanforizing</td>
                    </tr>
                  </table>
                </Popover.Body>
              </Popover>
            }
          >
            <div>
              <Image
                src={basePath + "/image/竑澤服務項目-47.png"}
                alt="後整理 Finishing"
                width={"150px"}
                height={"150px"}
              />
              <div>
                <span style={{ color: "#A73374" }}>
                  後整理 <br /> <span>Finishing</span>
                </span>
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  fontSize={18}
                  style={{}}
                  className="right"
                />
              </div>
            </div>
          </OverlayTrigger>
        </div>
        <div className={styles.title} style={{ marginTop: 33 + "px" }}>
          <h3>設備介紹</h3>
        </div>

        <div className={`${styles.section} equipment`} id="equipment">
          {equipment.map((item) => {
            return (
              <div
                key={item.name}
                className="equipment-item"
                id={`equipment-item-${item.name}`}
              >
                <Link href={""}>
                  <a
                    href={`${basePath2}/image/comp3/${item.name}-1.${"jpg" || "png"}`}
                    data-pswp-width={1200}
                    data-pswp-height={800}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="image">
                      <Image
                        src={`${basePath}/image/comp3/${item.name}-1.${
                          "jpg" || "png"
                        }`}
                        layout="fill"
                      ></Image>
                      <FontAwesomeIcon
                        icon={faUpRightAndDownLeftFromCenter}
                        style={{
                          marginLeft: "auto",
                          color: "rgb(221 221 221)",
                          position: "absolute",
                          top: "15px",
                          right: "15px",
                        }}
                        size="2x"
                      />
                    </div>
                  </a>
                </Link>

                <div className="text">
                  <h3>{item.name}</h3>
                  <span>{item.description}</span>
                </div>

                <Link href={""} style={{ visibility: "hidden" }}>
                  <a
                    href={`${basePath2}/image/comp3/${item.name}-2.${"jpg" || "png"}`}
                    data-pswp-width={1200}
                    data-pswp-height={800}
                    target="_blank"
                    rel="noreferrer"
                    style={{ visibility: "hidden" }}
                  >
                    <div className="image" style={{ visibility: "hidden" }}>
                      <Image
                        src={`${basePath}/image/comp3/${item.name}-2.${
                          "jpg" || "png"
                        }`}
                        layout="fill"
                      ></Image>
                      <FontAwesomeIcon
                        icon={faUpRightAndDownLeftFromCenter}
                        style={{
                          marginLeft: "auto",
                          color: "rgb(221 221 221)",
                          position: "absolute",
                          top: "15px",
                          right: "15px",
                        }}
                        size="2x"
                      />
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

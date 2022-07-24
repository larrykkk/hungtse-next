import Head from "next/head";
import styles from "./factory.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
// import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useWindowSize } from "../hooks/useWindowDimensions.js";

export default function Factory() {
  const size = useWindowSize();
  const onServiceClick = () => {
    console.log(123);
  };

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

      <div className={styles.banner}>
        <div className={styles.desc}>
          <h3>廠區介紹</h3>
        </div>
      </div>

      <main>
        <div className={styles.title} style={{ marginTop: 33 + "px" }}>
          服務項目
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
            <div onClick={() => onServiceClick()}>
              <Image
                src="/竑澤服務項目-44.png"
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
            <div onClick={() => onServiceClick()}>
              <Image
                src="/竑澤服務項目-46.png"
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
                  <table width={'300px'}>
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
            <div onClick={() => onServiceClick()}>
              <Image
                src="/竑澤服務項目-45.png"
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
            <div onClick={() => onServiceClick()}>
              <Image
                src="/竑澤服務項目-47.png"
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
          設備介紹
        </div>
        <div className={styles.section}></div>
      </main>
    </div>
  );
}

import Image from "next/image";
import styles from "./TheFooter.module.scss";

export default function Footer() {
  const isProd = process.env.NODE_ENV === "production";
  const isStatic = process.env.NEXT_PUBLIC_BUILD_MODE === "static";
  const basePath = isProd && isStatic ? "/hungtse-next" : "";

  return (
    <footer className={styles.footer}>
      <div className={styles.logo} style={{ marginRight: "20px" }}>
        <Image
          src={basePath + "/image/20220905 竑澤Logo_頁尾.png"}
          alt="logo"
          width={324}
          height={175}
        />
      </div>
      <div className={styles.info}>
        <div>
          桃園縣觀音工業區工業二路２３號 <br />
          23 KUNG-YEH 2 ROAD KUAN IN INDUSTRIAL ZONE
          <br /> TAO-YUAN. TAIWAN. R.O.C.
        </div>
        <div>
          TEL／(03)4836636~8 <br />
          FAX／(03)4836136 <br />
          EMAIL／hiprint.ht1@msa.hinet.net
        </div>
      </div>
      <div className={styles["certification-slogan"]}>
        <div
          style={{ display: "flex", alignItems: "flex-end" }}
        >
          <span className={styles.slogen}>技術傳承、品質保證、永續經營</span>
        </div>
      </div>
    </footer>
  );
}

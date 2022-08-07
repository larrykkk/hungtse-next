import Image from "next/image";
import styles from "./TheFooter.module.scss";

export default function Footer() {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/hungtse-next" : "";

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image
          src={basePath + "/image/竑澤單Logo-27.png"}
          alt="logo"
          width={161}
          height={87}
        />
        <br />
        <h1>竑澤實業股份有限公司</h1>
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
          EMAIL／HungTse84@gmail.com
        </div>
      </div>
      <div className={styles["certification-slogan"]}>
        <div
          style={{ height: "72px", display: "flex", alignItems: "flex-end" }}
        >
          <span className={styles.slogen}>技術傳承、品質保證、永續經營</span>
        </div>
      </div>
    </footer>
  );
}

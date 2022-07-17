import Image from "next/image";
import styles from "./TheFooter.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image src="/竑澤單Logo-27.png" alt="logo" width={161} height={87} />
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
          EMAIL／hiprint.ht1@msa.hinet.net
        </div>
      </div>
      <div className={styles["certification-slogan"]}>
        <Image
          src="/GRS-Logo-白字.png"
          alt="GRS-Logo"
          width={221}
          height={'100%'}
          className={styles.img1}
        />
        <Image
          src="/iso9001.png"
          alt="GRS-Logo"
          width={105}
          height={'100%'}
          className={styles.img2}
        />
        <h2 className={styles.slogen}>技術傳承、品質保證、永續經營</h2>
      </div>
    </footer>
  );
}

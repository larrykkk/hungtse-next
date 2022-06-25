import styles from "./TheFooter.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="" alt="logo" />
        <br />
        竑澤實業股份有限公司
      </div>
      <div className={styles.info}>
        <div>
          桃園縣觀音工業區工業二路２３號 <br />
          23 KUNG-YEH 2 ROAD KUAN IN INDUSTRIAL ZONE TAO-YUAN. TAIWAN. R.O.C. <br />
          TEL／(03)4836636~8 <br />
          FAX／(03)4836136 <br />
          EMAIL／hiprint.ht1@msa.hinet.net
        </div>
      </div>
      <div className={styles["certification-slogan"]}>
        <img src="" alt="logo" />
        <img src="" alt="logo" />
        <h2>技術傳承、品質保證、永續經營</h2>
      </div>
    </footer>
  );
}

import { useState, useEffect, useRef } from "react";
import styles from "./TheHeader.module.scss";

export default function Header() {
  const myHeader = useRef(null);
  const [activeName, setActiveName] = useState("");
  const [isSticky, setIsSticky] = useState("");

  useEffect(() => {
    setActiveName(window.location.pathname);

    var sticky = myHeader.current.offsetTop;

    const onScroll = () => {
      if (window.pageYOffset > sticky) {
        setIsSticky("sticky");
      } else {
        setIsSticky("");
      }
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  var getClassName = (pathname) => {
    return activeName === pathname
      ? `${styles.active} ${styles.link}`
      : `${styles.link}`;
  };

  return (
    <div
      ref={myHeader}
      className={`${styles.header} header ${isSticky ? styles.sticky : ""}`}
    >
      <div>
        <img src="/竑澤Logo-27.png" alt="logo" width={95} />
        <div className={styles.menu}>
          <div className={`${getClassName("/")} `}>
            <a href="/">首頁</a>
          </div>

          <div className={`${getClassName("/products")}`}>
            <a href="/products">產品項目</a>
          </div>

          <div className={`${getClassName("/factory_intro")}`}>
            <a href="/factory_intro">廠區介紹</a>
          </div>

          <div className={`${getClassName("/about")}`}>
            <a href="/about">關於竑澤</a>
          </div>

          <div className={`${getClassName("/contact")}`}>
            <a href="/contact">
              <button
                style={{
                  border: `1px solid #0D6EFD`,
                  padding: "8px 12px",
                  borderRadius: "4px",
                }}
              >
                聯絡我們
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

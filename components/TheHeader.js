import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "./TheHeader.module.scss";
import { useWindowSize } from "../hooks/useWindowDimensions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const router = useRouter();
  const myHeader = useRef(null);
  const [pathname, setPathname] = useState(router.pathname);
  const [subMenuActiveName, setSubMenuActiveName] = useState("");
  const [isSticky, setIsSticky] = useState("");
  const size = useWindowSize();
  const [menuOpenState, setMenuOpenState] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    setPathname(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    window.$ = window.jQuery = require("jquery");

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        toggleSubMenu("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  var getClassName = (_pathname) => {
    return pathname === _pathname
      ? `${styles.active} ${styles.link} active`
      : `${styles.link}`;
  };

  var toggleSubMenu = (name) => {
    if (subMenuActiveName === name) {
      setSubMenuActiveName("");
    } else {
      setSubMenuActiveName(name);
    }
  };

  const Menu = () => (
    <div
      ref={wrapperRef}
      className={styles.menu}
      style={{ display: menuOpenState || size.width > 767 ? "flex" : "none" }}
    >
      <li className={`${getClassName("/")}`}>
        <Link href="/">
          <a>首頁</a>
        </Link>
      </li>

      <li className={`${getClassName("/products")}`}>
        <div>
          <Link href="/products">
            <a>產品項目</a>
          </Link>
          <button
            onClick={() => toggleSubMenu("products")}
            style={{ marginLeft: "auto" }}
          >
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ marginLeft: " 8px" }}
            />
          </button>
        </div>

        <ul
          className={`nav-dropdown ${
            subMenuActiveName === "products" ? "open" : ""
          }`}
        >
          <li>
            <Link href="/products#a">
              <a onClick={() => toggleSubMenu("products")}>寢具</a>
            </Link>
          </li>

          {/* <hr /> */}
          <li>
            <Link href="/products#b">
              <a>浴袍</a>
            </Link>
          </li>

          {/* <hr /> */}
          <li>
            <Link href="/products#c">
              <a>成衣</a>
            </Link>
          </li>

          {/* <hr /> */}
          <li>
            <Link href="/products#d">
              <a>醫療</a>
            </Link>
          </li>

          {/* <hr /> */}
          <li>
            <Link href="/products#e">
              <a>迷彩</a>
            </Link>
          </li>
        </ul>
      </li>

      <li className={`${getClassName("/factory_intro")}`}>
        <Link href="/factory_intro">
          <a>廠區介紹</a>
        </Link>
      </li>

      <li className={`${getClassName("/about")}`}>
        <Link href="/about">
          <a>關於竑澤</a>
        </Link>
      </li>

      <li className={`${getClassName("/contact")}`}>
        <Link href="/contact">
          <a>
            <span className={`${styles.contactme} contactme`}>聯絡我們</span>
          </a>
        </Link>
      </li>
    </div>
  );

  if (size.width < 767) {
    return (
      <>
        <div ref={myHeader} className={`${styles["mobile-header"]}`}>
          <Image
            className={styles["m-logo"]}
            src="/竑澤單Logo-27.png"
            width={62}
            height={34}
            alt="logo"
          />
          <Image
            className={styles["m-site-name"]}
            src="/竑澤 橫式文字-38.png"
            width={188}
            height={20}
            alt="竑澤 橫式文字"
          />

          <button
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setMenuOpenState(!menuOpenState)}
          >
            {menuOpenState ? (
              <FontAwesomeIcon icon={faXmark} fontSize={30} className="xmark" />
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>
        </div>
        <Menu />
      </>
    );
  } else {
    return (
      <div
        ref={myHeader}
        className={`${styles.header} header ${isSticky ? styles.sticky : ""}`}
      >
        <div>
          <Image src="/竑澤單Logo-27.png" alt="logo" width={95} height={52} />
          <Menu />
        </div>
      </div>
    );
  }
}

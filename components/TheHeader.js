import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "./TheHeader.module.scss";
import { useWindowSize } from "../hooks/useWindowDimensions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const myHeader = useRef(null);
  const [activeName, setActiveName] = useState("");
  const [isSticky, setIsSticky] = useState("");
  const size = useWindowSize();
  const [subMenuActiveName, setSubMenuActiveName] = useState("");
  const [menuOpenState, setMenuOpenState] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    window.$ = window.jQuery = require("jquery");

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

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        toggleSubMenu("");
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  var getClassName = (pathname) => {
    return activeName === pathname
      ? `${styles.active} ${styles.link}`
      : `${styles.link}`;
  };

  var toggleSubMenu = (name) => {
    // console.log(name);
    if (subMenuActiveName === name) {
      setSubMenuActiveName("");
    } else {
      setSubMenuActiveName(name);
    }
  };

  var toggleMenu = () => {
    $(wrapperRef.current).slideToggle(() => {
      // console.log($(this));
      if ($(this).is(":visible")) {
        $(this).css("display", "flex");
      }
    });
  };

  const Menu = () => (
    <div
      ref={wrapperRef}
      className={styles.menu}
      style={{ display: menuOpenState || size.width > 767 ? "flex" : "none" }}
    >
      <li className={`${getClassName("/")} `}>
        <Link href="/">
          <a>首頁</a>
        </Link>
      </li>

      <li className={`${getClassName("/products")}`}>
        <div style={{ display: "flex", width: "100%" }}>
          <Link href="/products">
            <a>產品項目</a>
          </Link>
          <button style={{ marginLeft: "auto" }}>
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
          <span className={`${styles.contactme} contactme`}>聯絡我們</span>
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

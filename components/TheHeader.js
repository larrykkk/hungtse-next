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
    console.log(name);
    if (subMenuActiveName === name) {
      setSubMenuActiveName("");
    } else {
      setSubMenuActiveName(name);
    }
  };

  var toggleMenu = () => {
    $(wrapperRef.current).slideToggle(() => {
      console.log($(this));
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
        <a href="/">首頁</a>
      </li>

      <li className={`${getClassName("/products")}`}>
        <div style={{ display: "flex", width: "100%" }}>
          <a href="/products">產品項目 </a>
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
            <a href="/products#a" onClick={() => toggleSubMenu("products")}>
              寢具
            </a>
          </li>

          {/* <hr /> */}
          <li>
            <a href="/products#b" onClick={() => toggleSubMenu("products")}>
              浴袍
            </a>
          </li>

          {/* <hr /> */}
          <li>
            <a href="/products#c" onClick={() => toggleSubMenu("products")}>
              成衣
            </a>
          </li>

          {/* <hr /> */}
          <li>
            <a href="/products#d" onClick={() => toggleSubMenu("products")}>
              醫療
            </a>
          </li>

          {/* <hr /> */}
          <li>
            <a href="/products#e" onClick={() => toggleSubMenu("products")}>
              迷彩
            </a>
          </li>
        </ul>
      </li>

      <li className={`${getClassName("/factory_intro")}`}>
        <a href="/factory_intro">廠區介紹</a>
      </li>

      <li className={`${getClassName("/about")}`}>
        <a href="/about">關於竑澤</a>
      </li>

      <li className={`${getClassName("/contact")}`}>
        <a href="/contact">
          <span className={`${styles.contactme} contactme`}>聯絡我們</span>
        </a>
      </li>
    </div>
  );

  if (size.width > 767) {
    return (
      <div
        ref={myHeader}
        className={`${styles.header} header ${isSticky ? styles.sticky : ""}`}
      >
        <div>
          <img src="/竑澤單Logo-27.png" alt="logo" width={95} />
          <Menu />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div ref={myHeader} className={`${styles["mobile-header"]}`}>
          <img
            className={styles["m-logo"]}
            src="/竑澤單Logo-27.png"
            alt="logo"
          />
          <img
            className={styles["m-site-name"]}
            src="/竑澤 橫式文字-38.png"
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
  }
}

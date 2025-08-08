"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/dh-logo.svg";
import styles from "./styles.module.css";

function DhLogo() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    
    setOpen((prevOpen) => {
      const nextOpen = !prevOpen
      return nextOpen;
    });
  }
  return (
    <div 
      className={styles.wrapper}
    >
      <button
        className={styles.button}
        style={{ transform: open ? "rotateZ(90deg)" : "rotateZ(0deg)" }}
        onClick={handleClick}
      >
        <Image
          src={logo}
          objectFit="contain"
          layout="fill"
          alt={"Dan Hoffman official logo, a capital D and an H"}
        />
      </button>
      {
        <div
          className={`${styles.menuWrapper} ${open ? styles.open : ""}`}
        >
          <div className={styles.linkWrapper} onClick={handleClick}>
            <Link href={"/"} className={styles.navLink}>
              home
            </Link>
            <Link href={"/about"} className={styles.navLink}>
              about
            </Link>
            <Link href={"/individual-psychotherapy"} className={styles.navLink}>
              individual
              <br /> psychotherapy
            </Link>
            <Link href={"/fees"} className={styles.navLink}>
              fees
            </Link>
            <Link href={"/contact"} className={styles.navLink}>
              contact
            </Link>
          </div>
        </div>
      }
      {/* {open && <div className={styles.overlay} onClick={handleClick}></div>} */}
    </div>
  );
}

export default DhLogo;

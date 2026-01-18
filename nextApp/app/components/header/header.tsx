import Link from "next/link";
import DhLogo from "@/app/components/dh/dhLogo";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homeWrapper}>
        <Link href={"/"} className={styles.logo}>
          Dan Hoffman,<br/>
          LCSW
        </Link>
      </div>
      <div className={styles.navWrapper}>
        <Link href={"/about"} className={styles.navLink}>
          About
        </Link>
        <Link href={"/services"} className={styles.navLink}>
          Services<br/>
        </Link>
        <Link href={"/contact"} className={styles.navLink}>
          Contact
        </Link>
      </div>
      <DhLogo/>
    </div>
  )
}

export default Header
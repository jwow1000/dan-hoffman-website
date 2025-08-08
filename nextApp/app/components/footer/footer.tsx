import Link from "next/link";
import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homeWrapper}>
        ©dan hoffman 2025
        <Link 
          href="https://www.jeremywy.com/" 
          target="_blank" 
          rel="noreferrer noopener"
          className={styles.jeremy}
        >
          website: jeremy wiles-young
        </Link>
      </div>
      <div className={styles.navWrapper}>
        <Link href={"/"} className={styles.navLink}>
          home
        </Link>
        <Link href={"/"} className={styles.navLink}>
          about
        </Link>
        <Link href={"/"} className={styles.navLink}>
          contact
        </Link>
       
      </div>

    </div>
  )
}

export default Footer
import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import styles from "@/components/main-header/main-header.module.css";
import HeaderBAckGround from "./main-header-backGround";
import NavLink from "./navLink";

export default function MainHeader() {
  return (
    <>
      <HeaderBAckGround />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="A Plate With food on it" priority />
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

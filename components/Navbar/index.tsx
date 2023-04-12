import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon from '../../public/assets/c-i-icon.png'
import logo from '../../public/assets/c-i-logo.png'
import styles from './styles.module.scss';


function Navbar() {
  return (
    <>
    <div className={styles.stickyContainer} >
      <nav className={styles.navbar}>
        <div className={styles.navLinks} >

        <div className={styles.logo}>
          <Image src={icon} alt="college illuminated logo" width={30} height={40} />
          <Image src={logo} alt="college illuminated logo" width={118} height={40} />
        </div>

        <ul className={styles.links}>
          <li>
            <Link href="/" className={styles.navLinks}>
              FIND A MENTOR
            </Link>
          </li>
          <li>
            <Link href="/pricing" className={styles.navLinks}>
             PRICING
            </Link>
          </li>
          <li>
            <Link href="/blog" className={styles.navLinks}>
              BLOG
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLinks}>
              ABOUT
            </Link>
          </li>
        </ul>
        
        </div>

        <div className={styles.userLinks}>
          <Link href="/signin" className={styles.margin_right}>
            SIGN IN
          </Link>
          <div className={styles.btnPrimary}>
            <Link href="/contact" >
              GET STARTED
            </Link>
          </div>
        </div>

      </nav>
      </div>
    </>
  );
}

export default Navbar;
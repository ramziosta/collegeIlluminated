import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import icon from '../../public/assets/c-i-icon.png';
import logo from '../../public/assets/c-i-logo.png';
import mobile from '../../public/assets/mobile.png';
import styles from './styles.module.scss';

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState(
    744
  );

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={styles.stickyContainer}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>

            {windowWidth <= 744 ? (


              <Image src={mobile} alt="college illuminated logo" />

            ) : (
              <>
                <Image src={icon} alt="college illuminated logo" width={30} height={40} />
                <Image src={logo} alt="college illuminated logo" width={118} height={40} />
              </>

            )}
          </div>
          <div className={styles.navLinks}>
            <ul className={styles.links}>
              <li>
                <Link href="/" className={styles.navLinks}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/findAMentor" className={styles.navLinks}>
                  Find a mentor
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={styles.navLinks}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.navLinks}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className={styles.navLinks}>
                  College Talk
                </Link>
              </li>

            </ul>
          </div>
          <div className={styles.userLinks}>
            <Link href="/signin" className={styles.margin_right}>
              Sign In
            </Link>
            <div className={styles.btnPrimary}>
              <Link href="/signup" >
                Get Started
              </Link>
            </div>
          </div>
          <div className={styles.hamburgerMenu} onClick={toggleMobileNav}>
            <div className={styles.userLinks}>
              <Link href="/signin" >
                Sign In
              </Link>

            </div>
            <div className={styles.mobileLeft} >
              <Link className={styles.mobileSignIn} href="/signin" >
                Sign In
              </Link>
              <span className={styles.hamburger} >&#9776;</span>
            </div>
          </div>
        </nav>
        <div className={`${styles.mobileNavLinks} ${mobileNavOpen ? styles.show : styles.hidden}`}>

          <ul className={styles.links}>
            <li>
              <Link href="/" className={styles.navLinks2}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/findAMentor" className={styles.navLinks2}>
                Find a mentor
              </Link>
            </li>
            <li>
              <Link href="/pricing" className={styles.navLinks2}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/blogs" className={styles.navLinks2}>
                College Talk
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLinks2}>
                About
              </Link>
            </li>
          </ul>
          <div className={styles.btnPrimary}>
          <Link href="/signup" >
              Get Started
           </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

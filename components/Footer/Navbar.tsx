import React, { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.styles.module.scss';
function FooterNavbar() {


  return (
    <>
      <nav className={styles.navbar}>

        <ul className={styles.list}>
          <li>
            <Link className={styles.links} href="/" >Home</Link>
          </li>
          <li>
            <Link className={styles.links} href="/" >Find A Mentor</Link>
          </li>
          <li>
            <Link className={styles.links} href="/pricing" >Pricing</Link>
          </li>
          <li>
            <Link className={styles.links} href="/about" >About</Link>
          </li>
          <li>
            <Link className={styles.links} href="/blog" >Blog</Link>
          </li>
        </ul>
        <ul className={styles.list}>
          <li>
            <Link className={styles.links} href="/blog" >Join The Team</Link>
          </li>
          <li>
            <Link className={styles.links} href="/blog" >FAQ</Link>
          </li>
          <li>
            <Link className={styles.links} href="/contact" >Contact Us</Link>
          </li>
        </ul>

      </nav>
    </>
  );
}


export default FooterNavbar;

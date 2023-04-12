import React from 'react';
import styles from './styles.module.scss';
import logo from '../../public/assets/c_i_white.png'
import Image from 'next/image';
import FooterNavbar from './Navbar'


export default function Footer() {
  return (
    <>
      <div className={styles.footer}>

        <div className={styles.left} >

          <div className={styles.whiteLogo} >
            <Image src={logo} alt="logo" width={233} height={65} />
          </div>

          <div className={styles.contactInfo}>
          <p>Contact Info</p>
            <p>Contact Info....</p>
          </div>

          <div className={styles.address}>
            <p>College Illuminated</p>
            <p>Address 1</p>
            <p>Address 2</p>
            <p>Zip Code</p>
          </div>

          <p>© Copyright 2023 college Illuminated</p>

        </div>

        <div className={styles.right} >
          <FooterNavbar />
        </div>

      </div>
    </>
  )
}

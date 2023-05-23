import React, { useState, FC } from 'react';
import type { Metadata } from 'next'
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';
import { students, universities, universityLogo, illustrations, accentImages, socialMedia } from '../constants/data.jsx';
import { auth, firestore, storage } from '../server/firebase';
import { UploadTaskSnapshot, ref } from 'firebase/storage';
import { uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { UserCredential, signInAnonymously } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
export const metadata: Metadata = {
  title: 'college Illuminated',
  description: 'Welcome to college Illuminated where students connects with students to streamline their college admission',
};

interface Data {
  id: number;
  cardHeader: string;
  cardInfo: string;
  image: string;

}

interface CardProps {
  data: Data;
  width: number;
  height: number;
}

const Card: FC<CardProps> = ({ data, width, height }) => {
  return (
    <div className={styles.card}>
      <Image src={data.image} alt="vector-image" className={styles.vectorImage} style={styles} width={width} height={height} />
      <div className={styles.cardText}>
        <h4 className="h4" >{data.cardHeader}</h4>
        <p className={`${styles.cardInfo} body1`}>{data.cardInfo}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [email, setEmail] = useState('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sign in anonymously
    const userCredential = await signInAnonymously(auth);
    const user = userCredential.user;
    const folderName = email;


    
       

    const res = await addDoc(collection(firestore, "newsletter emails"), {
     
      email: email,
    
    });

    console.log(res);
    await auth.signOut();
  };

  return (
    <>
      <main className={styles.main}>

        <div className={styles.container} >
          <div className={styles.mainHeader}>

            <div className={styles.headerText} >
              <h2 className="h2" >Get into the college of your dreams!</h2>
              <p className="body1" >Connect with real students and get their insider perspective on what it takes to get into your dream school.</p>
            </div>

            <div className={`${styles.btnPrimary} ${styles.btnPrimaryWhite} `}  >
              <Link href="/contact"
                className={styles.cta}>GET STARTED
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer} >
          <div className={styles.grid} >

            <div className={styles.image1}>
              <Image src={students[0].image} className={`${styles.image} `} alt="Student Image" width={436} height={400} />
            </div>



            <div className={styles.image2} >
              <Image src={students[1].image} alt="Student Image" className={`${styles.image} `} width={436} height={200} />
            </div>

            <div className={styles.image3} >
              <Image src={students[2].image} alt="Student Image" className={`${styles.image}`} width={436} height={200} />
            </div>

            <div className={styles.image4} >
              <Image src={students[3].image} alt="Student Image" className={`${styles.image} `} width={436} height={400} />
            </div>

          </div>

        </div>

      </main>

      <section className={styles.section1}>

        <div className={styles.collegeIcons}>
          <div className={styles.iconContainer} >
            {universities.map((item) => (
              <Image src={item.image} key={item.id} alt={item.alt} className={`${styles.icons} ${styles.icon}`}
                width="200"
                height="200" />
            ))}
          </div>
        </div>

        <div className={styles.iconText}>
          <div className={styles.textContainer} >
            <h2 className="h2" >Find Your Competitive Edge</h2>
            <p className="body1">Stand out among your peers with affordable and personalized guidance from individuals who have been in your shoes.</p>
            <div className={`${styles.btnPrimary} ${styles.btnPrimaryYellow} `} >
              <Link href="/contact"
                className={styles.cta}>Get Started
              </Link>
            </div>
          </div>
        </div>

      </section>

      <section className={styles.section2} >

        <div className={`${styles.headerText} ${styles.center}`} >
          <h2 className="h2" >Why College Illuminated:</h2>
        </div>

        {illustrations.map((item) => (
          <Card key={item.id} data={item} width={150} height={150} />
        ))}

        <div className={`${styles.btnPrimary} ${styles.btnPrimaryDark} `} >
          <Link href="/contact"
            className={styles.ctaDark}>Get Started
          </Link>
        </div>


      </section>

      <section className={styles.section3}>
        <div className={styles.collegeNames}>
          <Image src={universityLogo[0].image} alt={universityLogo[0].alt} className={styles.icons} width={180} height={46} />
          <Image src={universityLogo[1].image} alt={universityLogo[1].alt} className={styles.icons} width={150} height={46} />
          <Image src={universityLogo[2].image} alt={universityLogo[2].alt} className={styles.icons} width={180} height={46} />
          <Image src={universityLogo[3].image} alt={universityLogo[3].alt} className={styles.icons} width={250} height={46} />
        </div>

        <div className={`${styles.section3Text}`} >
          <h3 className='h3'>
            Gain an unfair advantage against all peers with affordabe year-long consulting.
          </h3>
        </div>
        <div className={`${styles.btnPrimary} ${styles.btnPrimaryYellow} `} >
          <Link href="/contact"
            className={styles.cta}>Get Started
          </Link>
        </div>
      </section>

      <section className={styles.section4}>

        <div className={styles.mobile} >
          <Image src={accentImages[0].image} alt="Social Media" width={265} height={540} />
        </div>

        <div className={styles.socialMediaContainer} >

          <div className={styles.socialMediaBlock} >

            <div className={styles.socialMediaTextNArrow} >
              <Image src={accentImages[1].image} alt="arrow" className={styles.accentArrow} width={90} height={30} />
              <h2 >Join a community of ##### students!</h2>
            </div>
            <div className={styles.iconBlock} >

              <div className={styles.socialMedia} >
                <Image src={socialMedia[0].image} alt={socialMedia[0].alt} className={styles.socialMediaIcons} width={40} height={40} />
                <Image src={socialMedia[1].image} alt={socialMedia[1].alt} className={styles.socialMediaIcons} width={40} height={40} />
                <Image src={socialMedia[2].image} alt={socialMedia[2].alt} className={styles.socialMediaIcons} width={40} height={40} />
                <Image src={socialMedia[3].image} alt={socialMedia[3].alt} className={styles.socialMediaIcons} width={40} height={40} />
                <Image src={socialMedia[4].image} alt={socialMedia[4].alt} className={styles.socialMediaIcons} width={40} height={40} />
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className={styles.section5}>

        <div className={styles.subscribe} >
          <h2>Gain access to 46 most common interview questions</h2>

          <form
            onSubmit={handleSubmit}
            target="_blank"
            className={styles.form}>
            <label htmlFor="email" className={styles.email} >Email</label>

            <input
                  className={styles.input}
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  required
                  name="Email"
                  aria-describedby="Email"
                />
           
              <button className={`${styles.btnPrimarySubmit} ${styles.btnPrimaryDarkSubmit} `} type="submit"
                value="send" 
                >Send Me The Guide
              </button>
         
          </form>
        </div>


        <div>
          <Image src={accentImages[2].image} alt="Accepted Image" className="icons" width={450} height={500} />
        </div>

      </section>

    </>
  );
}

export default Home;
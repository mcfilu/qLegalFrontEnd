import React from 'react';
import { me } from '../assets';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';
import styles from '../style';

const about = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar/>
        </div>
        </div>

        <div className={`bg-primary md:mb-36 mb-12 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
            <About/>
        </div>
        </div>

        <div className={`bg-blue-500  ${styles.flexStart}`}>
        <div >
            <Footer/>
        </div>
        </div>
    </div>


  );
};

export default about
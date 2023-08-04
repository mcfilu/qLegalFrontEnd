import React from 'react';
import Footer from '../components/Footer';
import Episodes from '../components/Episodes';
import Navbar from '../components/Navbar';
import styles from '../style';

const episodes = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar/>
        </div>
        </div>

        <div className={`bg-primary mb-12 md:mb-36 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
            <Episodes/>
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

export default episodes
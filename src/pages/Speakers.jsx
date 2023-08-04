import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Speakers2 from '../components/Speakers'
import styles from '../style'

const Speakers = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar/>
        </div>
        </div>

        <div className={`bg-primary mb-12 md:mb-36 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
            <Speakers2/>
        </div>
        </div>

        <div className={`bg-blue-500  ${styles.flexStart}`}>
        <div >
            <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Speakers
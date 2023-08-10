import React from 'react'
import styles from '../style'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Partners from '../components/Partners'

const contact = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar/>
          </div>
        </div>

        <div className={`bg-primary mb-12 md:mb-36 ${styles.paddingX}  ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
              <Contact/>
          </div>
        </div>
        <div className={`bg-primary mb-12 md:mb-36 ${styles.paddingX}  ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
              <Partners/>
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

export default contact
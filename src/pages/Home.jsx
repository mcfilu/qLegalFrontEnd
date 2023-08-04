import React from 'react' // Importing the React library
import Navbar from '../components/Navbar'; // Importing the custom Navbar component 
import Hero from '../components/Hero'; // Importing the custom Hero component 
import Footer from '../components/Footer'; // Importing the custom Footer component 
import LastEpisodes from '../components/LastEpisodes'; // Importing the custom LastEpisodes component 
import Listen from '../components/Listen';
import styles from '../style'; // Importing the local style file


const Home = () => { // Creating a functional component called Home
    return(

    <div className="bg-primary w-full overflow-hidden">
      {/* First section of the page */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/> 
        </div>
      </div>

      {/* Second section of the page */}
      <div className={`bg-primary mt-8 md:mt-20 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/> 
        </div>
      </div>
      
      <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Listen/> 
        </div>
      </div>

      {/* Third section of the page */}
      <div className={`bg-primary md:mb-36 mb-12 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <LastEpisodes/> 
        </div>
      </div>

      {/* Fourth section of the page */}
      <div className={`bg-blue-500  ${styles.flexStart}`}>
        <div >
          <Footer/> 
        </div>
      </div>
    </div>
  );
};

export default Home // Exporting the created component to be reused in other files.

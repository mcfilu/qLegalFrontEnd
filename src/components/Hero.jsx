import styles from '../style';
import {discount, robot, podcastImage} from '../assets'
import { podcastLinks, socialMedia } from '../constants';
// import SubscribeModal from './subscribeModal';
import { useState } from 'react';
import { success } from '../assets';
import axios from "axios";
import { useEffect } from 'react';


const Hero = () => {
    const [SModal, setSModal] = useState(false);
    const [SInput, setSInput] = useState(true);
    const [NName, setNName] = useState("");
    const [NEmail, setNEmail] = useState("");
    const [sm, setSM] = useState([]);

    const handleSubmit = (event) => {
      setSInput(false);
      console.log(SInput);
      event.preventDefault();
      console.log(NEmail);
      console.log(NName);

      const n_data = {
        "name": NName,
        "email": NEmail,
      }
      axios.post("http://localhost:8000/api/newsletter/", n_data)
    }

    useEffect(() => {
      axios
      .get("http://127.0.0.1:8000/api/social_media_links/")
        .then(res => setSM(res.data))
        .catch((err) => console.log(err));
      console.log(sm);

  }, []);

  return (
  <section id="home" className={``}>
    <div onClick={() => setSModal(false)}>
      <div className={`bg-black bg-opacity-50 backdrop-blur-sm fixed inset-0 p-2 flex justify-center items-center ${SModal ? '' : 'hidden'}`}>
        <div className={`bg-slate-200 p-2 rounded-[10px] md:w-[700px] md:h-[350px]`} onClick={e => e.stopPropagation()}>
                <div className={`${SInput ? 'hidden' : ''}`}>
                  <h1 className={`font-poppins font-normal text-[35px] flex justify-center mt-8 text-center`}>Thank your for subscribing!</h1>
                  <div className={`flex items-center justify-center mt-12`}>
                    <img src={success} className={`w-150px h-[150px]`}></img>
                  </div>
                  
                </div>
                <div className={`${SInput ? '' : 'hidden'}`}>
                  <h1 className={`font-poppins font-normal text-[35px] flex justify-center mt-8 text-center`}>Subscribe to our newsletter:</h1>
                      <div className={`flex flex-col justify-center items-center mt-8`}>
                        <form onSubmit={handleSubmit} className={`flex flex-col  w-full items-center justify-center`}>
                          <input required type="text" name="newsletter_name" value={NName} onChange={(e) => setNName(e.target.value)} aria-describedby="helper-text-explanation" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[80%] md:w-[400px] `} placeholder="Your name"></input>
                          <input required type="email" name="newsletter_email" value={NEmail} onChange={(e) => setNEmail(e.target.value)} aria-describedby="helper-text-explanation" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[80%] md:w-[400px] mt-4`} placeholder="Your email"></input>
                          {/* <button className={`w-[170px] h-[55px] bg-blue-500 rounded-[10px] font-poppins text-xl text-white mt-12`} >SUBSCRIBE</button> */}
                          <div className={`flex justify-center items-center`}>
                            <input type="submit" value="Submit" className={`mb-4 w-[170px] h-[55px] bg-blue-500 rounded-[10px] font-poppins text-xl text-white mt-12 cursor-pointer`} ></input>
                          </div>
                        </form>
                      </div>
                </div>
                    
        </div>
      </div>
    </div>
    
    <div className={`flex flex-col md:flex-row   `}>
      <div className={`flex flex-row items-center rounded-[10px] md:w-[600px]`}>
        <img src={podcastImage} alt="project image" className="w-full rounded-xl"></img> 
      </div>

      <div className={`flex flex-col md:pl-12 `}>  
        <div className={`hidden md:flex flex-col md:w-[700px] md:h-[380px] bg-discount-gradient rounded-xl  px-4  rounded-[10px]`}>
            <p className={`p-6 py-4 font-poppins text-white`}>
            Welcome to "Yours Lawfully" – a groundbreaking podcast meticulously crafted by an exceptional team of Postgraduate Law Students, with our home base nestled within the prestigious Queen Mary University of London. As passionate advocates of the law and technology, we take immense pride in bringing you an unparalleled listening experience that keeps you at the forefront of the rapidly evolving worlds of Tech, Media, and Intellectual Property Law.
            </p>
          <p className={`p-6 py-4 font-poppins text-white`}>
          Drawing from the wealth of experience and academic brilliance within Queen Mary University of London's community, "Yours Lawfully" presents an exciting fusion of academic rigor and real-world applications. Our postgraduate law students are the driving force behind the production, ensuring every episode is a captivating journey through the intricate intersection of law and technology.
          </p>
        </div>

        <div className={`flex flex-row py-4 mt-2 md:mt-6  items-center justify-start place-content-center`}>
        <h3 className={`font-poppins font-normal text-[24px] text-white`}>Follow us on:</h3>
        <ul className={`list-none flex flex-row items-center`}>
          {sm.map((nav,index) => (
            <li key={nav.id} className={``}>
              <a href={nav.link}><img src={nav.icon} className={`h-[50px] md:ml-8 ml-4 `}></img></a>
            </li>
          ))}
        </ul>
        </div>

        <div className={` mt-2 md:mt-8`}>
          <button className={`w-[170px] h-[55px] bg-blue-500 rounded-[10px] font-poppins text-xl text-white`} onClick={() => setSModal(true)}>SUBSCRIBE</button>
        </div>

        <div className={` md:hidden flex-auto md:w-[700px] md:h-[380px] bg-discount-gradient rounded-xl   rounded-[10px] mt-4`}>
            <p className={`p-2 font-poppins text-white`}>
            Welcome to "Yours Lawfully" – a groundbreaking podcast meticulously crafted by an exceptional team of Postgraduate Law Students, with our home base nestled within the prestigious Queen Mary University of London. As passionate advocates of the law and technology, we take immense pride in bringing you an unparalleled listening experience that keeps you at the forefront of the rapidly evolving worlds of Tech, Media, and Intellectual Property Law.
            </p>
          <p className={`p-2 font-poppins text-white`}>
          Drawing from the wealth of experience and academic brilliance within Queen Mary University of London's community, "Yours Lawfully" presents an exciting fusion of academic rigor and real-world applications. Our postgraduate law students are the driving force behind the production, ensuring every episode is a captivating journey through the intricate intersection of law and technology.
          </p>
        </div>
        

        
      </div>
      
    </div>


    

  </section>
  
  )
  }

export default Hero
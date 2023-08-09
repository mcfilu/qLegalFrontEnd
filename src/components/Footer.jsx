import React from 'react'
import { footer1, footer2, socialMedia, navLinks } from '../constants'
import { NavLink } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Footer = () => {
  
    const [sm, setSM] = useState([]);
    const [podcasts, setPodcasts] = useState([]);
    const [media, setMedia] = useState([])

    useEffect(() => {
        axios
            .get("https://server.yourslawfully.com/api/podcast_links/")
                .then(res => setMedia(res.data))
                    .catch((err) => console.log(err));
    })

    

    useEffect(() => {
        axios
        .get("https://server.yourslawfully.com/api/social_media_links/")
          .then(res => setSM(res.data))
          .catch((err) => console.log(err));
        console.log(sm);

    }, []);

     useEffect(() => {
        axios
        .get("https://server.yourslawfully.com/api/podcast_links/")
          .then(res => setPodcasts(res.data))
          .catch((err) => console.log(err));

    }, []);

    return(
    <section id="footer" className={`sm:pt-12 pt-6 flex flex-col`}>
      <div className={`flex flex-col md:flex-row justify-items-center text-white`}>
        <div className={`md:pl-12 md:w-[250px]`}>
          <h1 className={`font-poppins font-normal text-[28px] mb-4 text-center`}>Pages</h1>
          <ul className={`ml-0`}>
            {navLinks.map((nav, index) => (
              <li className={`mb-2 pl-[35%] md:pl-10`} key = {nav.id}>
                
                <NavLink className={`flex items-center`} to={`${nav.link}`}><i  className={`mr-4 fa-solid fa-circle text-[10px] `}></i>{nav.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={`md:pl-12 md:w-[250px]`}>
          <h1 className={`font-poppins font-normal text-[28px] mb-4 text-center`}>Listen on</h1>
          <ul className={`flex flex-col items-center justify-center`}>
            {media.map((nav, index) => (
              <li className={`mb-1`} key = {nav.id}>
                <a href={nav.link}><img className={`w-[180px]`} src={nav.icon}/></a>
              </li>
            ))}

          </ul>
        </div>

        <div className={`md:pl-12 md:w-[250px]`}>
          <h1 className={`font-poppins font-normal text-[28px] mb-4 text-center`}>Check out</h1>
          <ul className={`pl-[35%] md:pl-10`}>
            {sm.map((nav, index) => (
              <li className={`mb-2`} key = {nav.id}>
                <a href={nav.link} className={`flex flex-row`}><img src={nav.icon} className={`mr-3`}/>{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`flex justify-center items-center place-content-center mt-4 mb-6 text-white`}>
        <p>All rights reserved Queen Mary Univesity of London</p>
      </div>
    </section>
    );
};


export default Footer

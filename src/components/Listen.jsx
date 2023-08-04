import React from 'react'
import { podcastLinks } from '../constants'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Listen = () => {
    const [media, setMedia] = useState([])

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/podcast_links/")
                .then(res => setMedia(res.data))
                    .catch((err) => console.log(err));
    })
  return (
    <div className={` my-20`}>
        <ul className="hidden md:flex list-none flex flex-row justify-center items-center">
            {media.map((nav,index) => (
              <li
                key = {nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] } mr-2`}   
              >
                <a href={nav.link}><img className={`h-[48px] rounded-[12px]`} src={nav.icon}></img></a>
              </li>
            ))}
          </ul>

          <ul className="flex md:hidden list-none flex flex-row justify-between items-center w-full ">
            {media.map((nav,index) => (
                index < 2 && (
                    <li
                        key = {nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] }`}   
                    >
                        <a href={nav.link}><img className={`h-[48px] rounded-[12px]`} src={nav.icon}></img></a>
                    </li>
            )))}
            
          </ul>
          <ul className="flex md:hidden list-none flex flex-row justify-between items-center mt-6 w-full ">
            {media.map((nav,index) => (
                index > 1 && (
                    <li
                        key = {nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] }`}   
                    >
                        <a href={nav.link}><img className={`h-[48px] rounded-[12px]`} src={nav.icon}></img></a>
                    </li>
            )))}
            
          </ul>

    </div>
  )
}

export default Listen
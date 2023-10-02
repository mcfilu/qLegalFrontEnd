import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { twitter } from '../assets';
import { linkedin } from '../assets';

const Speakers = () => {
    const current_year = new Date().getFullYear();
    const [speakers, setSpeakers] = useState([]);
    const [year, setYear] = useState(current_year);
    const all_years = [];
    const yearly_speakers = {};
    

    useEffect(() => {
        axios
        .get("https://system.yourslawfully.co.uk/api/speakers/")
           .then(res => setSpeakers(res.data))
           .catch((err) => console.log(err));
        
    }, []);
    // console.log(speakers);

    for (let i = 0; i < speakers.length; i++) {
        console.log('do for loop');
        let speaker_year = Number(speakers[i].year);

        if (!all_years.includes(speaker_year)){
            all_years.push(speaker_year);
            // console.log("blahblah");
        }
        if (!Object.keys(yearly_speakers).includes(String(speaker_year))){
            yearly_speakers[speaker_year] = [];
            yearly_speakers[speaker_year].push(speakers[i]);
        }
        else {
            yearly_speakers[speaker_year].push(speakers[i]);
        }

    }

    all_years.sort(function(a, b){return b-a});
  return (
    <section className={`mt-12`}>
        <div className={`flex flex-col w-[95%] md:w-[65%] mx-auto`}>
            <h1 className={`font-poppins text-white  text-[50px] text-center`}>Our Speakders</h1>
            <p className={`font-poppins text-white text-[15px] mt-2 md:mt-8`}>At "Yours Lawfully," we are honored to host an array of brilliant speakers, thought leaders, and industry pioneers who graciously share their expertise and insights at our podcast. Our speakers are at the forefront of the ever-evolving world of technology and law, driving innovation and shaping the legal landscape.</p>
            <p className={`font-poppins text-white text-[15px] mt-2 md:mt-4`}>As a platform committed to fostering intellectual discussions, we take pride in curating diverse voices that inspire and empower our audience. Whether you seek to stay informed on the latest tech trends, understand the legal implications of emerging innovations, or simply find inspiration in the stories of these remarkable individuals – our speakers' insights will captivate and enlighten.</p>
        </div>
        <div className={`flex flex-row  place-content-center mt-8`}>
            {
                all_years.map((cu_year, index) => (
                    <button className={`w-[100px] h-[50px] rounded-[10px] m-4 ${year === cu_year ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'}`} onClick={() => setYear(cu_year)} >{cu_year}</button>
                ))
            }
            
        </div>
        <div className={`hidden md:flex flex-col w-full`}>
        {all_years.map((cu_year, index) => (
            <div className={`flex flex flex-col place-content-center items-center ${year === cu_year ? '' : 'hidden'}`}>
                {
                    yearly_speakers[cu_year].map((item, index) => (
                        <div className={`flex bg-black-gradient w-[1000px] min-h-[200px] rounded-[10px] mt-16 `}>
                            <div className={`w-[200px] flex items-center justify-center`}>
                                <img src={item.image} className={`w-[160px] h-[160px] rounded-full object-cover`}></img>
                            </div>
                            <div className={`flex flex-col w-[700px] py-4`}>
                                <h1 className={`text-white font-poppins text-[25px]  ml-4`}>{item.name} {item.surname}</h1>
                                <p className={`text-white font-poppins text-[15px] mt-4 ml-4`}>{item.description}</p>
                            </div>
                            <div className='w-[100px] flex flex-col items-center justify-center'>

                                {/* <a className={`${item.twitter !== null ? '' : 'hidden'}`} href={item.tiwtter}><img src={twitter} className={`w-[50px] h-[50px] m-4 ${item.twitter !== null ? '' : 'hidden'}`}></img></a> */}
                                <a sclassName={`${item.linkedin !== null ? '' : 'hidden'}`} href={item.linkedin}><img src={linkedin} className={`w-[50px] h-[50px] m-4 ${item.linkedin !== null ? '' : 'hidden'}`}></img></a>
                            </div>
                        </div>
                    ))
                }
                
            
            </div>
        ))
        }
        </div>
        { all_years.map((cu_year, index) => (
            <div className={`flex md:hidden flex-col place-content-center items-center ${year === cu_year ? '' : 'hidden'}`}>
                {
                    yearly_speakers[cu_year].map((cu_team, index) => (
                        <div className={`flex flex-col bg-black-gradient  rounded-[10px] mt-16  p-2`}>
                            <h1 className={`text-white font-poppins text-[25px] text-center `}>{cu_team.name} {cu_team.surname} </h1>
                            <div className={`w-full flex flex-row mt-2 h-[220px]`}>
                                <img src={cu_team.image} className={`w-[60%] rounded-full object-cover`}></img>
                                <div className=' flex flex-row items-center justify-center w-[40%]'>


                                    <a href={cu_team.linkedin} className={`flex items-center justify-center`}><img src={linkedin} className={`w-[60%] h-[60%]  ${cu_team.linkedin !== null ? '' : 'hidden'}`}></img></a>
                                </div>
                                
                            </div>
                            <div className={` flex flex-col mt-2`}>
                                <p className={`text-white font-poppins text-[16px] `}>{cu_team.description}</p>
                            </div>
                            
                            
                        </div>
                    ))
                }
            </div>
        ))}
    </section>
  )
}

export default Speakers
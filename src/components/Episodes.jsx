import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { podcastImage, spotifyPodcasts, applePodcast, overcastPodcast, buzzsproutPodcast} from '../assets';
import { useEffect } from 'react';
import { podcastLinks } from '../constants';

function Convert(totalSeconds){
    let hour = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let to_return = "";
    if (seconds > 0){
        if (seconds >= 10){
            to_return = seconds;
        }
        else {
            to_return = "0" + seconds;
        }
    }
    else {
        to_return = "00";
    }

    if (minutes > 0){
        if (minutes >= 10){
            to_return = minutes + ":" + to_return;
        }
        else {
            to_return = "0" + minutes + ":" + to_return;
        }
    }
    else {
        to_return = "00:" + to_return;
    }

    if (hour > 0){
        if (hour >=10){
            to_return = hour + ":" + to_return;
        }
        else {
            to_return = "0" + hour + ":" + to_return;
        }
    }
    
    return to_return;

};

const Episodes = () => {
    const [currentEp, setCurrentEp] = useState(null);
    const current_year = new Date().getFullYear();
    const all_years = [];
    const yearly_episodes = {};
    const [year, setYear] = useState(current_year);
    const [episodes, setEpisodes] = useState([]);

    const [LModal, setLModal] = useState(false);
    const closeLModal = () => setLModal(false);

    useEffect(() => {
        axios
        .get("https://server.yourslawfully.com/api/episodes/")
           .then(res => setEpisodes(res.data))
           .catch((err) => console.log(err));
        
    }, []);
    // console.log(episodes);

    for (let i = 0; i < episodes.length; i++) {
        let episode_year = Number(episodes[i].published_date.slice(0,4));

        if (!all_years.includes(episode_year)){
            all_years.push(Number(episodes[i].published_date.slice(0,4)));
            // console.log("blahblah");
        }
        if (!Object.keys(yearly_episodes).includes(String(episode_year))){
            yearly_episodes[episode_year] = [];
            yearly_episodes[episode_year].push(episodes[i]);
        }
        else {
            yearly_episodes[episode_year].push(episodes[i]);
        }

      }
    // console.log(all_years);
    // console.log(yearly_episodes);
    function handleClick(year, index){
        setLModal(true);
        setCurrentEp(yearly_episodes[year][index]);
    }

    

      
    

  return (
    <section id="home" className={`mt-12`}>

        <div onClick={() => setLModal(false)}>
            <div className={`bg-black bg-opacity-50 p-2 md:p-0 backdrop-blur-sm fixed inset-0 flex justify-center items-center ${LModal ? '' : 'hidden'}`}>
                <div className={`bg-slate-200 p-2 rounded-[10px] w-[500px] h-[400px]`} onClick={e => e.stopPropagation()}>
                    <h1 className={`font-poppins font-normal text-[35px] flex justify-center text-center`}>Listen to this episode on:</h1>
                    <div className={`flex items-center flex-col justify-center mt-4 `}>
                        
                            {currentEp && (
                            <a  className={`${currentEp["spotify_link"] ? '' : 'hidden'} justify-center flex mt-4 w-[200px]`} href={currentEp["spotify_link"]}><img src={spotifyPodcasts} className={`w-[200px]`}></img></a>
                            )}
                            {currentEp && (
                            <a  className={`${currentEp["apple_link"] ? '' : 'hidden'} justify-center flex mt-4 w-[200px]`} href={currentEp['apple_link']}><img src={applePodcast} className={`w-[200px]`}></img></a>
                            )}
                            {currentEp && (
                            <a  className={`${currentEp["overcast_link"] ? '' : 'hidden'} justify-center flex mt-4 w-[200px]`} href={currentEp['overcast_link'] ? '' : ''}><img src={overcastPodcast} className={`w-[200px]`}></img></a>
                            )}
                            {currentEp && (
                            <a  className={`${currentEp["buzzsprout_link"] ? '' : 'hidden'} justify-center flex mt-4 w-[200px]`} href={currentEp['buzzsprout_link'] ? '' : ''}><img src={buzzsproutPodcast} className={`w-[200px]`}></img></a>
                            )}
                        
                    
                    </div>
                </div>
            </div>
        </div>

        <div className={`flex flex-col w-[95%] md:w-[65%] mx-auto`}>
            <h1 className={`font-poppins text-white  text-[50px] text-center`}>Our Episodes</h1>
            <p className={`font-poppins text-white text-[15px] mt-2 md:mt-8`}>In each episode, we engage in compelling discussions with esteemed guests, ranging from tech pioneers and legal experts to industry visionaries. Together, we uncover the fascinating landscapes where innovation meets regulation, unraveling the complexities and challenges that arise in this rapidly evolving digital era.</p>
            <p className={`font-poppins text-white text-[15px] mt-2 md:mt-4`}> Tune in to our episodes below and explore the forefront of emerging technologies, the legal framework that governs them, and the visionary minds driving change. Welcome to the podcast that explores the ever-changing world of technology through the lens of law – "Yours Lawfully."</p>
        </div>
        <div className={`flex flex-row  place-content-center mt-8`}>
            {
                all_years.map((item, index) => (
                    
                    <button key={item} className={`w-[100px] h-[50px] rounded-[10px] m-4 ${year === item ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'}`} onClick={() => setYear(item)} >{item}</button>

                ))
            }
            {/* <button className={`w-[100px] h-[50px] rounded-[10px] m-4 ${year === 2023 ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'}`} onClick={() => setYear(2023)} >2023</button>
            <button className={`w-[100px] h-[50px] rounded-[10px] m-4 ${year === 2022 ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'}`} onClick={() => setYear(2022)}>2022</button>
            <button className={`w-[100px] h-[50px] rounded-[10px] m-4 ${year === 2021 ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'}`} onClick={() => setYear(2021)}>2021</button> */}
        </div>
        <div className={`hidden md:flex flex-col w-full`}>

        
            {
                all_years.map((item, index) => (
                    
                    <div key={item} className={`flex flex-col items-center place-content-center ${year===item ? '' : 'hidden'}`}>
                        
                        {
                            yearly_episodes[item].map((epi, ind) => (
                                <div key={epi.id} className={`mt-12`}>
                                    <div className={`flex flex-row w-[1000px] h-[200px] bg-black-gradient-2 rounded-[10px]`}>
                                        <div className={`w-[200px]`}>
                                            <img src={epi.image} className={`w-[170px] h-[170px] items-center justify-center m-4 rounded-[10px]`}></img>
                                        </div>
                                        
                                        <div className={`flex flex-col w-[650px] pl-8 mt-2`}>
                                            <div className={`h-[40px]`}>
                                                <h2 className={`font-poppins text-white mt-3 text-[18px] mb-2 max-w-[650px]`}>{epi.title}</h2>
                                            </div>

                                            <div className={`h-[130px] mt-4`}>
                                                <p className={`font-poppins text-white text-[11px] max-w-[650px]`}>{epi.description}</p>
                                            </div>
                                            <div className={`flex flex-row h-[30px]`}>
                                                <h4 className={`font-poppins text-white text-[12px]`}>{Convert(epi.length)}</h4>
                                                <h4 className={`font-poppins text-white text-[12px] ml-8`}>{epi.published_date}</h4>
                                                
                                            </div>
                                        </div>
                                        <div className={`flex flex-row w-[150px] items-center justify-center `}>
                                            <button onClick={() => handleClick(index, ind)} className={`w-24 h-24 rounded-full items-center bg-blue-500 focus:outline-none`}><i className={`fa fa-play text-white text-[40px]`} ></i></button>
                                        </div>
                                    </div>
                                    
                                </div>

                            ))
                        }

                        

                        
                        
                    </div>
                ))
            }
        </div>

{
                all_years.map((item, index) => (
                    
                    <div key={item} className={`flex md:hidden flex-col items-center place-content-center ${year===item ? '' : 'hidden'}`}>
                        
                        {
                            yearly_episodes[item].map((epi, ind) => (
                                <div key={epi.id} className={`mt-12  episode`}>
                                    <div className={`flex flex-row w-full bg-black-gradient-2 rounded-[10px] `}>
                                        
                                        
                                        <div className={`flex flex-col w-full p-2 items-center justify-center`}>
                                            <div className={``}>
                                                <h2 className={`font-poppins text-white  text-[20px] mb-2  text-center`}>{epi.title}</h2>
                                            </div>

                                            <div className={`w-full flex flex-row`}>
                                                <img src={epi.image} className={`w-[60%] items-center justify-center  rounded-[10px]`}></img>
                                                <div className={`flex flex-row w-[40%] items-center justify-center `}>
                                                    <button onClick={() => handleClick(item, ind)} className={` w-24 h-24 rounded-full items-center bg-blue-500 focus:outline-none`}><i className={`fa fa-play text-white text-[40px]`} ></i></button>
                                                </div>
                                            </div>

                                            <div className={` mt-4`}>
                                                <p className={`font-poppins text-white text-[13px] w-full`}>{epi.description}</p>
                                            </div>
                                            <div className={`flex flex-row w-full justify-between h-[30px] mt-4`}>
                                                <h4 className={`font-poppins text-white text-[12px]`}>{Convert(epi.length)}</h4>
                                                <h4 className={`font-poppins text-white text-[12px] `}>{epi.published_date}</h4>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                </div>

                            ))
                        }

                        

                        
                        
                    </div>
                ))
            }
        

        


    </section>
  );
};

export default Episodes
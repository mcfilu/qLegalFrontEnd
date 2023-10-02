import React from 'react'
import { podcastImage } from '../assets'
// import LinksModal from './LinksModal'
import { useState } from 'react'
import { podcastLinks } from '../constants'
import { useEffect } from 'react'
import axios from "axios";
import { spotifyPodcasts, applePodcast, overcastPodcast, buzzsproutPodcast } from '../assets'

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

const LastEpisodes = () => {
    const [currentEp, setCurrentEp] = useState(1);
    const [currentNum, changeNum] = useState(4);
    const current_year = new Date().getFullYear();
    const all_years = [];
    const yearly_episodes = {};
    const [year, setYear] = useState(current_year);
    const [episodes, setEpisodes] = useState([]);
    const [links, setLinks] = useState([]);

    const [LModal, setLModal] = useState(false);
    const [buttonVis, setButtonVis] = useState(true);
    const closeLModal = () => setLModal(false);


    useEffect(() => {
        axios
        .get("https://system.yourslawfully.co.uk/api/episodes/")
           .then(res => {
            const reversedEpisodes = res.data.reverse();
            setEpisodes(reversedEpisodes);
           })
           .catch((err) => console.log(err));
        
    }, []);

    useEffect(() => {
        axios
        .get("https://server.yourslawfully.con/api/podcast_links/")
        .then(res => {setEpisodes(res.data);})
        .catch((err) => console.log(err));
    })
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

    function changeEpisodes(){
        // console.log(episodes);
        changeNum((prevNum) => {
            const newVal = prevNum + 5;
            if (newVal > episodes.length){
                setButtonVis(false);
            }
            return newVal;
        })
        
    }

    function handleClick(index){
        setLModal(true);
        setCurrentEp(index);
    }



    

      
    

    // console.log(episodes);
  return (
    <section id="home" className={`sm:py-12 `}>

        <div onClick={() => setLModal(false)}>
            <div className={`bg-black bg-opacity-50 p-2 md:p-0 backdrop-blur-sm fixed inset-0 flex justify-center items-center ${LModal ? '' : 'hidden'}`}>
                <div className={`bg-slate-200 p-2 rounded-[10px] w-[500px] h-[400px]`} onClick={e => e.stopPropagation()}>
                    <h1 className={`font-poppins font-normal text-[35px] flex justify-center text-center`}>Listen to this episode on:</h1>
                    <div className={`flex items-center flex-col justify-center mt-4 `}>
                        {links.map((item, index) => (
                            <a key={index} className={` justify-center flex mt-4 w-[200px]`} href={item.link}><img src={item.icon} className={`w-[200px]`}></img></a>
                        ))}
                        
                    
                    </div>
                </div>
            </div>
        </div>

        <h1 className={`font-poppins text-white  text-[50px] text-center`}>Last episodes</h1>
        
            
                    
                    <div className={`hidden md:flex flex-col items-center place-content-center}`}>
                        
                        {
                            episodes.map((epi, ind) => (
                                <div key={epi.id} className={`mt-12 ${ind < currentNum ? '' : 'hidden'} episode`}>
                                    <div className={`flex flex-row w-[1000px] min-h-[200px] bg-black-gradient-2 rounded-[10px] `}>
                                        <div className={`w-[200px] flex items-center`}>
                                            <img src={epi.image} className={`w-[170px] h-[170px] items-center justify-center m-4 rounded-[10px]`}></img>
                                        </div>
                                        
                                        <div className={`flex flex-col w-[650px] py-3`}>
                                            <div className={`min-h-[40px]`}>
                                                <h2 className={`font-poppins text-white mt-3 text-[25px] mb-2 max-w-[650px]`}>{epi.title}</h2>
                                            </div>

                                            <div className={`min-h-[100px] mt-2`}>
                                                <p className={`font-poppins text-white text-[14px] max-w-[650px]`}>{epi.description}</p>
                                            </div>
                                            <div className={`flex flex-row min-h-[20px] mt-2`}>
                                                <h4 className={`font-poppins text-white text-[12px]`}>{Convert(epi.length)}</h4>
                                                <h4 className={`font-poppins text-white text-[12px] ml-8`}>{epi.published_date}</h4>
                                                
                                            </div>
                                        </div>
                                        <div className={`flex flex-row w-[150px] items-center justify-center `}>
                                            <button onClick={() => handleClick(ind)} className={` w-24 h-24 rounded-full items-center bg-blue-500 focus:outline-none`}><i className={`fa fa-play text-white text-[40px]`} ></i></button>
                                        </div>
                                    </div>
                                    
                                </div>

                            ))
                        }


                        
                        
                    </div>
                    
                    <div className={`flex md:hidden flex-col items-center place-content-center}`}>
                        
                        {
                            episodes.map((epi, ind) => (
                                <div key={epi.id} className={`mt-12 ${ind < currentNum ? '' : 'hidden'} episode`}>
                                    <div className={`flex flex-row w-full bg-black-gradient-2 rounded-[10px] `}>
                                        
                                        
                                        <div className={`flex flex-col w-full p-2 items-center justify-center`}>
                                            <div className={``}>
                                                <h2 className={`font-poppins text-white  text-[20px] mb-2  text-center`}>{epi.title}</h2>
                                            </div>

                                            <div className={`w-full flex flex-row`}>
                                                <img src={epi.image} className={`w-[60%] items-center justify-center  rounded-[10px]`}></img>
                                                <div className={`flex flex-row w-[40%] items-center justify-center `}>
                                                    <button onClick={() => handleClick(ind)} className={` w-24 h-24 rounded-full items-center bg-blue-500 focus:outline-none`}><i className={`fa fa-play text-white text-[40px]`} ></i></button>
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



                    <div className={`flex items-center justify-center mt-12`}>
                        <button onClick={() => changeEpisodes()} className={`${buttonVis ? '' : 'hidden'} bg-blue-500 text-white p-3 font-poppins text-[20px] md:text-[25px] rounded-full`}>Load More</button>
                    </div>
                
        

        


    </section>
  );
};


export default LastEpisodes
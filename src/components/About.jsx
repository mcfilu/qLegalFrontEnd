import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { me } from '../assets'
import { karen, twitter, linkedin, team_pic} from '../assets';


const About = () => {
    const current_year = new Date().getFullYear();
    const [year, setYear] = useState(current_year);
    const [team, setTeam] = useState([]);
    const all_years = [];
    const yearly_team = {};
    

    useEffect(() => {
        axios
        .get("https://system.yourslawfully.co.uk/api/team/")
           .then(res => setTeam(res.data))
           .catch((err) => console.log(err));
        
    }, []);

    for (let i = 0; i < team.length; i++) {
        console.log('do for loop');
        let team_year = Number(team[i].year);

        if (!all_years.includes(team_year)){
            all_years.push(team_year);
            // console.log("blahblah");
        }
        if (!Object.keys(yearly_team).includes(String(team_year))){
            yearly_team[team_year] = [];
            yearly_team[team_year].push(team[i]);
        }
        else {
            yearly_team[team_year].push(team[i]);
        }

    }

    console.log(all_years);
    all_years.sort(function(a, b){return b-a});
  return (
    <section className={`mt-12`}>
        <div className={`flex flex-col w-[95%] mx-auto`}>
            <h1 className={`font-poppins text-white  text-[50px] text-center`}>Our Team</h1>
            <div className={`flex flex-col md:flex-row w-full mt-4`}>
            <div className={`flex md:w-[40%]`}>
                <img src={team_pic} className={`flex rounded-[10px] object-cover`}></img>
            </div>
            <div className={`flex flex-col md:w-[60%] md:px-4 items-center justify-center`}>
                <p className={`font-poppins text-white text-[15px] mt-6 md:mt-0 `}>At "Yours Lawfully," our team is the driving force behind the podcast's success, and we take pride in introducing you to the brilliant minds that make it all possible. Our diverse and dedicated team members bring a wealth of expertise, passion, and creativity to the table, united by our shared mission to explore the intricate relationship between technology and the law.</p>
                <p className={`font-poppins text-white text-[15px] mt-2 md:mt-8`}>Each team member contributes their unique perspective, allowing us to curate captivating content that engages and enlightens our listeners. With unwavering enthusiasm, we strive to deliver thought-provoking discussions that bridge the gap between cutting-edge technologies and the legal world.</p>
            </div>
            </div>
        </div>
        <div className={`flex flex-row  place-content-center mt-8`}>
            {
                all_years.map((cu_year, index) => (
                    <button className={`w-[100px] h-[50px] rounded-[10px] m-4 ${year === cu_year ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'}`} onClick={() => setYear(cu_year)} >{cu_year}</button>
                ))
            }
            
        </div>
        <div className={`hidden md:flex flex-col w-full`}>
        { all_years.map((cu_year, index) => (
            <div className={`flex flex-col place-content-center items-center ${year === cu_year ? '' : 'hidden'}`}>
                {
                    yearly_team[cu_year].map((cu_team, index) => (
                        <div className={`flex bg-black-gradient w-[1000px] min-h-[200px] rounded-[10px] mt-16 `}>
                            <div className={`w-[200px] items-center justify-center flex`}>
                                <img src={cu_team.image} className={`w-[160px] h-[160px] rounded-full  object-cover`}></img>
                            </div>
                            <div className={`w-[700px] flex flex-col py-4`}>
                                <h1 className={`text-white font-poppins text-[25px]  ml-4`}>{cu_team.name} {cu_team.surname}  -  {cu_team.position}</h1>
                                <p className={`text-white font-poppins text-[15px] mt-4 ml-4`}>{cu_team.description}</p>
                            </div>
                            <div className='w-[100px] flex flex-col items-center justify-center'>


                                <a href={cu_team.linkedin}><img src={linkedin} className={`w-[50px] h-[50px] m-4 ${cu_team.linkedin !== null ? '' : 'hidden'}`}></img></a>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        ))}
        </div>
        { all_years.map((cu_year, index) => (
            <div className={`flex md:hidden flex-col place-content-center items-center ${year === cu_year ? '' : 'hidden'}`}>
                {
                    yearly_team[cu_year].map((cu_team, index) => (
                        <div className={`flex flex-col bg-black-gradient  rounded-[10px] mt-16  p-2`}>
                            <h1 className={`text-white font-poppins text-[25px] text-center `}>{cu_team.name} {cu_team.surname}  -  {cu_team.position}</h1>
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

export default About
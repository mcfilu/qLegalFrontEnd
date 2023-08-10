import React from 'react'
import { qlegal, qmul } from '../assets'

const Partners = () => {
  return (
    <div className={`w-full flex flex-col items-center justify-center`}>
        <h2 className={`text-white text-center font-poppins text-[40px] mb-12`}>Our Partners</h2>
        <div className={`hidden md:flex w-full rounded-[10px] bg-black-gradient-2 flex-row p-4`}>
            <div className={`md:w-[20%] flex items-center justify-center`}>
                <img className={`w-full h-full object-cover rounded-[10px]`} src={qlegal}></img>
            </div>
            <div className={`flex flex-col md:w-[80%] items-center justify-center px-4`}>
                <a className={`text-white text-[40px] text-center`}>qLegal</a>
                <a className={`text-white mt-4`}>qLegal is a dynamic and essential component of our operational framework, consistently delivering unparalleled support and expertise. At the heart of our collaboration with qLegal is their exceptional ability to seamlessly source highly qualified independent lawyers. These legal experts play a pivotal role in meticulously fact-checking every aspect of our content, ensuring its accuracy, reliability, and compliance with the most up-to-date legal standards.</a>
                <a className={`text-white mt-4`}>Furthermore, qLegal goes above and beyond by actively participating in the recruitment of talented and motivated students. This multifaceted involvement not only enriches the learning experience of these students but also bolsters our team with fresh perspectives and innovative ideas. The symbiotic relationship between qLegal and our organization culminates in a harmonious synergy that fuels the entire production process.</a>
            </div>
        </div>
        <div className={`hidden md:flex w-full rounded-[10px] bg-black-gradient-2 flex-row p-4 mt-14`}>
            
            <div className={`flex flex-col md:w-[80%] items-center justify-center px-4`}>
                <a className={`text-white text-[40px] text-center`}>Technology, Media and Telecommunications Law Insitute</a>
                <a className={`text-white mt-4`}>TMT Law Institute stands as a formidable hub of intellectual discourse and academic excellence in the realm of legal studies. With a resolute commitment to fostering insightful conversations, this institute brings together a diverse array of world-leading academics, legal luminaries, and industry experts. These collective minds converge to deliberate upon the intricate intersections of technology, media, and telecommunications within the intricate tapestry of modern law.</a>
                <a className={`text-white mt-4`}>At the core of its mission, the TMT Law Institute not only acts as a platform for robust dialogues but also serves as a vital source of financial support for groundbreaking projects that push the boundaries of legal thought and innovation. Through its judicious allocation of resources, the institute empowers groundbreaking research, enabling scholars and researchers to delve into cutting-edge topics that redefine the contours of contemporary legal frameworks.</a>
            </div>
            <div className={`md:w-[20%] flex items-center justify-center`}>
                <img className={`w-full h-full object-cover rounded-[10px]`} src={qmul}></img>
            </div>
        </div>
        <div className={`flex md:hidden w-full rounded-[10px] bg-black-gradient-2 flex-col p-4 items-center justify-center`}>
             <a className={`text-white text-[35px] text-center`}>qLegal</a>
            <div className={`w-[60%] flex items-center justify-center`}>
                <img className={`w-full h-full object-cover rounded-[10px]`} src={qlegal}></img>
            </div>
            <div className={`flex flex-col w-full items-center justify-center`}>
                
                <a className={`text-white mt-4`}>qLegal is a dynamic and essential component of our operational framework, consistently delivering unparalleled support and expertise. At the heart of our collaboration with qLegal is their exceptional ability to seamlessly source highly qualified independent lawyers. These legal experts play a pivotal role in meticulously fact-checking every aspect of our content, ensuring its accuracy, reliability, and compliance with the most up-to-date legal standards.</a>
                <a className={`text-white mt-4`}>Furthermore, qLegal goes above and beyond by actively participating in the recruitment of talented and motivated students. This multifaceted involvement not only enriches the learning experience of these students but also bolsters our team with fresh perspectives and innovative ideas. The symbiotic relationship between qLegal and our organization culminates in a harmonious synergy that fuels the entire production process.</a>
            </div>
        </div>
        <div className={`flex md:hidden w-full rounded-[10px] bg-black-gradient-2 flex-col p-4 mt-6 items-center justify-center`}>
        <a className={`text-white text-[35px] text-center`}>Technology, Media and Telecommunications Law Insitute</a>
            <div className={`w-[60%] flex items-center justify-center`}>
                <img className={`w-full h-full object-cover rounded-[10px]`} src={qmul}></img>
            </div>
            <div className={`flex flex-col w-full items-center justify-center `}>
                
                <a className={`text-white mt-4`}>TMT Law Institute stands as a formidable hub of intellectual discourse and academic excellence in the realm of legal studies. With a resolute commitment to fostering insightful conversations, this institute brings together a diverse array of world-leading academics, legal luminaries, and industry experts. These collective minds converge to deliberate upon the intricate intersections of technology, media, and telecommunications within the intricate tapestry of modern law.</a>
                <a className={`text-white mt-4`}>At the core of its mission, the TMT Law Institute not only acts as a platform for robust dialogues but also serves as a vital source of financial support for groundbreaking projects that push the boundaries of legal thought and innovation. Through its judicious allocation of resources, the institute empowers groundbreaking research, enabling scholars and researchers to delve into cutting-edge topics that redefine the contours of contemporary legal frameworks.</a>
            </div>
            
        </div>
        
    </div>
  )
}

export default Partners
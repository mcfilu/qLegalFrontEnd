import React from 'react'

const Contact = () => {
  return (
    <section className={`mt-6 flex flex-row`}>
      <div className={`hidden md:flex flex-col`}>

        <p className={`text-white text-[40px] font-poppins text-center mb-6`}>Contact Us</p>
        <div className={`flex flex-row w-full`}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1241.3882772519337!2d-0.11975060477844679!3d51.51731524881428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3524d7a3dd%3A0xa6a6ac61abc5a7c0!2sCentre%20for%20Commercial%20law%20Studies!5e0!3m2!1spl!2suk!4v1676478975368!5m2!1spl!2suk"  width="750" height="600" style={{border: "0"}} allowFullScreen="" loading="lazy" className={`rounded-[10px]`} referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className={`flex flex-col ml-16`}>
            <div className={`bg-black-gradient-2 p-4 rounded-[10px]`}>
                <h1 className={'font-poppins text-white text-[30px]'}>Queen Mary University of London</h1>
                <h1 className={`font-poppins text-white text-[25px] mt-1`}>Centre for Commercial law Studies</h1>
                <h3 className={'font-poppins text-white text-[18px] mt-5'}>Tel: +44 (0)20 7882 8100</h3>
                <h3 className={'font-poppins text-white text-[18px]'}>Email: ccls-reception@qmul.ac.uk</h3>
                <h4 className={'font-poppins text-white text-[18px] mt-5'}>67-69 Lincoln's Inn Fields,</h4>
                <h4 className={'font-poppins text-white text-[18px]'}>London WC2A 3JB</h4>
                <h3 className={'font-poppins text-white text-[18px] mt-5'}>Opening times: 08:45am–20:30pm</h3>
            </div>
            <div className={`mt-6 bg-black-gradient-2 p-4 rounded-[10px]`}>
                <h1 className={'font-poppins text-white text-[30px]'}>Karen Watton</h1>
                <h3 className={'font-poppins text-white text-[25px] mt-3'}>Program Director</h3>
                <h3 className={'font-poppins text-white text-[18px] mt-3'}>Email: k.watton@qmul.ac.uk</h3>
                <h3 className={'font-poppins text-white text-[18px] mt-1'}>Telephone: +44 (0)20 7882 5023</h3>
                <h3 className={'font-poppins text-white text-[18px] mt-1'}>Room Number: 4th Floor, qLegal Area, CCLS</h3>
            </div>
            

        </div>
        </div>
      </div>


        <div className={`flex md:hidden flex-col w-full items-center justify-center`}>
        <a className={`flex text-white font-poppins text-[50px] text-center`}>Contact Us</a>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1241.3882772519337!2d-0.11975060477844679!3d51.51731524881428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3524d7a3dd%3A0xa6a6ac61abc5a7c0!2sCentre%20for%20Commercial%20law%20Studies!5e0!3m2!1spl!2suk!4v1676478975368!5m2!1spl!2suk"  width="100%" height="500" style={{border: "0"}} allowFullScreen="" loading="lazy" className={`rounded-[10px]`} referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className={`bg-black-gradient-2 p-4 rounded-[10px] mt-4`}>
                  <h1 className={'font-poppins text-white text-[30px]'}>Queen Mary University of London</h1>
                  <h1 className={`font-poppins text-white text-[25px] mt-1`}>Centre for Commercial law Studies</h1>
                  <h3 className={'font-poppins text-white text-[18px] mt-5'}>Tel: +44 (0)20 7882 8100</h3>
                  <h3 className={'font-poppins text-white text-[18px]'}>Email: ccls-reception@qmul.ac.uk</h3>
                  <h4 className={'font-poppins text-white text-[18px] mt-5'}>67-69 Lincoln's Inn Fields,</h4>
                  <h4 className={'font-poppins text-white text-[18px]'}>London WC2A 3JB</h4>
                  <h3 className={'font-poppins text-white text-[18px] mt-5'}>Opening times: 08:45am–20:30pm</h3>
             </div>
          
          <div className={`flex flex-col `}>
              
              <div className={`mt-4 bg-black-gradient-2 p-4 rounded-[10px] `}>
                  <h1 className={'font-poppins text-white text-[30px]'}>Karen Watton</h1>
                  <h3 className={'font-poppins text-white text-[25px] mt-3'}>Program Director</h3>
                  <h3 className={'font-poppins text-white text-[18px] mt-3'}>Email: k.watton@qmul.ac.uk</h3>
                  <h3 className={'font-poppins text-white text-[18px] mt-1'}>Telephone: +44 (0)20 7882 5023</h3>
                  <h3 className={'font-poppins text-white text-[18px] mt-1'}>Room Number: 4th Floor, qLegal Area, CCLS</h3>
              </div>
              

          </div>
        </div>
    </section>
  )
}

export default Contact
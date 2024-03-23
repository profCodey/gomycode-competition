import React from 'react'

const Footer = () => {
  return (
    <div>

<>
           <div className='flex justify-between items-center w-[80%] mx-auto pt-20'>
            <a href=""><h1 className='logo text-red-500 font-extrabold'>Kocina</h1></a>
            <div className='flex justify-around items-center gap-2 '>
            <a href=""><FaInstagram /></a>
            <a href=""><FaTumblr /></a>
            <a href=""><FaYoutube /></a>
            </div>
            </div>

      
      {/*  footer links , row 1*/}
      
     <div className='flex:col gap-[2vw]  sm:flex justify-between items-center w-[80%] h-80 mx-auto pt-10 sm:gap-[4vw] list-none'>
        <div className='mb-5'>
       <li>Presentations</li>
       <li>Professionals</li>
        <li>Stores</li>
        </div>

{/*  footer links, row 2*/}
     <div className='mb-5'>
        <a href=""><li>Webinars</li></a>
        <a href=""><li>Workshops</li></a>
        <a href=""><li>Local Meetups</li></a>
        </div>

{/*  footer links, row 3*/}

        <div className='mb-5'>
        <a href=""><li>Our Initiatives</li></a>
        <a href=""><li>Giving Back</li></a>
        <a href=""><li>Communities</li></a>
        </div>  

        {/*  footer links, row 4*/}

        <div className='mb-5'>
        <a href=""><li>Contact Form</li></a>
        <a href=""><li>Work With Us</li></a>
        <a href=""><li>Visit Us</li></a>
        </div>

        </div>









    </>

    </div>
  )
}

export default Footer
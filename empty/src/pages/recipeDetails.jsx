import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RecipeData } from '../db/RecipeData'
import { CiClock1 } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { FcRatings } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


const RecipeDetails = () => {
  const {id} =useParams()
const [details, setDetails]=useState(RecipeData[id])

    return (
    <div className=' flex-col w-screen h-screen w-screen bg-white-400 items-center  px-20'>
      <div  style={{width:"100%" ,height:"400px "}} className='bg-white-200 flex rounded-lg mt-28 ' >
        <div className='flex-1   '>
        <img  style={{objectPosition:"center",objectFit:"cover"}} className="w-full h-full rounded-lg"src={details.image}/>
        </div>
        <div className='flex-1 bg-white-200 px-10 gap-y-2'>
          <h1 className='font-bold text-5xl mb-5'>{details.title}</h1>
      <h2 className='mb-6 font-bold '>{details.description}</h2>
      <div  className='grid grid-cols-3 gap-2 h-36 mb-8'>
        <div className='bg-white-200 flex-col items-center justify-center rounded-lg px-10 py-10'> <CiClock1 className='w-10 h-8'/> <h2>Active time</h2>{details.activeTime}</div>
        <div className='bg-white-200  flex-col items-center rounded-lg px-10 py-10'> <FaClock  className='w-10 h-8'/> <h2>Total time</h2>{details.totalTime}</div>
        <div className='bg-white-200  flex-col items-center justify-center rounded-lg  py-10 px-10'> <IoPeopleOutline className='w-10 h-8'/> <h2>Yield</h2>{details. yield}</div>
    
      </div>
      <div className='flex justify-center bg-slate-300 w-28 h-10 items-center rounded-lg px-4 mt-3 '><FaRegStar className='text-yellow-700' />{details.ratings}</div>
        </div>

</div>
<div  style={{width:"100%" ,height:"550px "}} className=' flex rounded-lg  '>
<div className=' flex-1'>
<h2 className='font-bold flex items-center mt-4'><FaCheckCircle className='mr-2' /> <h1 className="text-orange-400">1.STEP</h1></h2>
      <div className='font-normal border-solid border-black-200 border-b-2 pb-4'> {details.steps}</div>
      <h2 className='font-bold flex items-center mt-4'><FaCheckCircle className='mr-2'/><h1 className="text-orange-400">2.STEP</h1></h2>
      <div className='font-normal border-solid border-black-200 border-b-2 pb-4'>{details.steps}</div>
      <h2 className='font-bold flex items-center mt-4'><FaCheckCircle className='mr-2 text-orabge-400' /><h1 className="text-orange-400">3.STEP</h1></h2>
      <div className='font-normal border-solid border-black-200 border-b-2 pb-4' >{details.steps}</div>
</div>
<div  style={{width:'200px'}}className=' flex-1 px-12 py-4'>
  <h1 className='font-bold text-center mb-12'>Ingredients</h1>
  <div className='flex-col items-center justify-center text-center mt-3.5'>
    <h1 className='font-bold border-solid border-black-200 border-b-2  pb-4'>{details.ingredients[0]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2 pb-4'>{details.ingredients[1]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2 pb-4'>{details.ingredients[2]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2 pb-4'>{details.ingredients[3]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2 pb-4'>{details.ingredients[4]}</h1>
    <h1 className='font-bold border-solid border-black-200 border-b-2 pb-4'>{details.ingredients[5]}</h1>
    
    
    </div>
</div>

  </div>
    </div>
  )
}

export default RecipeDetails
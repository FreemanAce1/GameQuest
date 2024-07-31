import { useEffect, useState  } from 'react'
import { motion,useScroll, useTransform } from "framer-motion"
import {ReactTyped} from 'react-typed'

import logo from '../assets/Image/ml9dj9d7ezc81.png'
import placeholder from '../assets/Image/Untitled.png'
import Tailwind from '../assets/Image/tailwind-css-logo-5AD4175897-seeklogo.com.png'
import sql from '../assets/Image/sql-server-icon-png-29.png'
import react from '../assets/Image/React-icon.svg.png'
import node from '../assets/Image/node-js-icon-227x256-913nazt0.png'
import html from '../assets/Image/html.png'
import selectGame from '../assets/Image/SelectGame.png'
import { Link } from 'react-router-dom'
import Preference from './Preference'
import howItWorks from '../assets/Image/Howitworkscard.png'

function Main() {
  
  const { scrollYProgress } = useScroll();
  const logoRotate = useTransform(scrollYProgress, [0, 0.3], [0, 10]);
  const logoYMove = useTransform(scrollYProgress, [0,0.3],[0,-200])

  useEffect(() => {

   let userId = localStorage.getItem('userId')
   if(!userId){
    userId = crypto.randomUUID()
    localStorage.setItem('userId',userId)
    fetch('http://localhost:5000/newUser',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'x-user-id':userId
      }
    })
   } 
  })


  return (
    <>
      <main className='bg-black flex-col'>
        <header className="bg-background bg-contain text-white text-4xl font-bold w-screen h-screen  flex  ">
          <div className='flex '>
            <div className='p-36 w-8/12 '>
              

            

              <h1 className='mb-16 text-6xl'>Find Your Next Favorite&nbsp;
              <ReactTyped
                strings={[
                  'Action',
                  'RPG',
                  'Racing',
                  'Multiplayer'
                ]}
                typeSpeed={150}
                backSpeed={100}
                startDelay={500}
                style={{color:'siteRed'}}
                loop></ReactTyped><br></br> 
                 Game</h1>
              <p className='text-3xl'>Discover new games tailored to your preferences. Find exciting titles that seamlessly align with your gaming tastes, ensuring countless hours of enjoyment.</p>
            </div>
            <motion.img 
              className="h-5/6 mt-20  drop-shadow-[0_3px_30px_rgba(255,255,255,0.5)] " 
              src={logo}
              style={{ rotate: logoRotate, y:logoYMove }} 
            />
          </div>
        </header>

        <section className='bg-black text-white bg-cover font-bold w-screen h-2/6 flex scale-x-[-1]' >
          <div className='scale-x-[-1]  w-10/12 h-6/6 flex items-center justify-between m-60 '>
            <img src={howItWorks} className='w-4/6 mr-40 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_3px_6px_rgba(255,255,255,0.5)] hover:-rotate-1 transition-all duration-100 ease-linear'></img>
            <div className='w-4/6'>
              <h2 className='text-6xl mb-10'>How It All Works</h2>
              <p className="text-2xl font-semibold">
                GameQuest starts by understanding your gaming preferences with a few questions
                Based on your answers, we'll recommend five titles for you to explore.<br /><br />
                When you find a game you like, we take note of its key features like genre,&nbsp;
                release date, platforms, and themes. This helps us refine future recommendations,&nbsp;
                tailoring them to your evolving tastes.<br /><br /> The more games you engage with,&nbsp;
                the more personalized your suggestions become. But we also add a touch of randomness&nbsp;
                to help you discover exciting new genres and expand your gaming horizons!
              </p>
            </div>
          </div>
        </section>

        <section className='w-screen h-1/6 bg-white'>
          <div className='pb-28' >
            <div className='pt-16 items-center justify-center w-screen align-middle flex'>
              <h2 className='text-black text-6xl font-bold mt-10'>Technologies Used</h2>
            </div>
            <div className='flex m-auto mt-20 items-center justify-around w-4/6 '>
              <div className='flex-col items-center justify-center flex group'>
                <div className='bg-gradient-to-tr from-siteRed via-red-500 to-yellow-300 p-4 items-center flex rounded-full w-40 h-40 group-hover:w-48 group-hover:h-48 group-hover:p-6 transition-all duration-300'>
                  <img src={Tailwind} className='object-contain  flex items-center w-36 h-36'></img>
                </div>
                <h3 className='mt-5 font-bold text-2xl'>Tailwind</h3>
              </div>

              <div className='flex-col items-center justify-center flex group'>
                <div className='bg-gradient-to-tr from-siteCyan via-siteCyan to-siteGreen p-8 items-center flex rounded-full w-40 h-40 group-hover:w-48 group-hover:h-48 group-hover:p-12 transition-all duration-300'>
                  <img src={sql} className='object-contain  flex items-center w-36 h-36'></img>
                </div>
                <h3 className='mt-5 font-bold text-2xl'>SQL</h3>
              </div>

              <div className='flex-col items-center justify-center flex group'>
                <div className='bg-gradient-to-tr from-siteRed via-red-500 to-yellow-300 p-4 items-center flex rounded-full w-40 h-40 group-hover:w-48 group-hover:h-48 group-hover:p-6 transition-all duration-300'>
                  <img src={react} className='object-contain  flex items-center w-36 h-36'></img>
                </div>
                <h3 className='mt-5 font-bold text-2xl'>React</h3>
              </div>

              <div className='flex-col items-center justify-center flex group'>
                <div className='bg-gradient-to-tr from-siteCyan via-siteCyan to-siteGreen p-4 items-center flex rounded-full w-40 h-40 group-hover:w-48 group-hover:h-48 group-hover:p-6 transition-all duration-300'>
                  <img src={node} className='object-contain  flex items-center w-36 h-36'></img>
                </div>
                <h3 className='mt-5 font-bold text-2xl'>Node JS</h3>
              </div>
            </div>
          </div>
        </section>



        <header className="bg-background-sec bg-cover text-white  font-bold w-screen h-10/12  flex scale-x-[-1]   ">
          <div className='flex flex-col mt-5 scale-x-[-1] w-screen '>
            <h1 className='text-7xl flex justify-center items-center mt-32 mb-10 '>GameQuest Features</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-24">

              <div class="relative rounded-lg shadow-lg overflow-hidden h">
                <div class="bg-gradient-to-br from-siteRed to-siteYellow p-12 rounded-t-lg flex items-center justify-center hover:p-8 transition-all duration-400">
                  <img src={placeholder} alt="Card 1 Image" class="h-full w-full object-cover rounded-t-lg" />
                </div>
                <div class="absolute inset-x-0 bottom-0 p-6 bg-white rounded-b-lg">
                  <h2 class="text-black text-2xl font-semibold mb-2">Find Games Tailored to You</h2>
                  <p class="text-gray-700 text-sm">Discover personalized game recommendations based on your preferences and play history. GameQuest's algorithm learns your tastes over time, ensuring you find games you'll truly enjoy.</p>
                </div>
              </div>


              <div class="relative rounded-lg shadow-lg overflow-hidden h">
                <div class="bg-gradient-to-br from-siteCyan to-siteGreen p-12 rounded-t-lg flex items-center justify-center hover:p-8 transition-all duration-400">
                  <img src={placeholder} alt="Card 1 Image" class="h-full w-full object-cover rounded-t-lg" />
                </div>
                <div class="absolute inset-x-0 bottom-0 p-6 bg-white rounded-b-lg">
                  <h2 class="text-black text-2xl font-semibold mb-2">View History of Liked Games</h2>
                  <p class="text-gray-700 text-sm">Keep track of all the games you've liked and easily revisit them. Your gaming history is a valuable resource for discovering similar titles and refining your recommendations.</p>
                </div>
              </div>


              <div class="relative rounded-lg shadow-lg overflow-hidden h">
                <div class="bg-gradient-to-br from-siteCyan to-siteGreen p-12 rounded-t-lg flex items-center justify-center hover:p-8 transition-all duration-400">
                  <img src={placeholder} alt="Card 1 Image" class="h-full w-full object-cover rounded-t-lg" />
                </div>
                <div class="absolute inset-x-0 bottom-0 p-6 bg-white rounded-b-lg">
                  <h2 class="text-black text-2xl font-semibold mb-2">View Details of Games</h2>
                  <p class="text-gray-700 text-sm">Dive deeper into the games that pique your interest. Explore detailed information, screenshots, reviews, and more to help you decide if a game is right for you.</p>
                </div>
              </div>
              <div class="relative rounded-lg shadow-lg overflow-hidden h">
                <div class="bg-gradient-to-br from-siteRed to-siteYellow  p-12 rounded-t-lg flex items-center justify-center hover:p-8 transition-all duration-400">
                  <img src={placeholder} alt="Card 1 Image" class="h-full w-full object-cover rounded-t-lg" />
                </div>
                <div class="absolute inset-x-0 bottom-0 p-6 bg-white rounded-b-lg">
                  <h2 class="text-black text-2xl font-semibold mb-2">Reset Preferences for Blank SlateOnline course dashboard</h2>
                  <p class="text-gray-700 text-sm">Your dashboard is mission control for your creator journey. Get instant access to the course chapters, the audiobook, your saved highlights, interviews, and more.</p>
                </div>
              </div>

            </div>
          </div>
        </header>


        <footer className='bg-white h-96 pt-16'>
          <div className='flex justify-center flex-col items-center '>
            <h1 className='text-6xl mt-16 font-bold'>Ready To Find Your Next Game?</h1>
            <Link to={"/Preference"} className='bg-gradient-to-br from-siteRed to-siteYellow p-6 font-bold mt-24 rounded-full w-1/6 flex justify-center text-2xl text-white hover:scale-105 transition-all duration-100'>Get Started</Link>
          </div>
        </footer>
      </main>
    </>
  )
}

export default Main;
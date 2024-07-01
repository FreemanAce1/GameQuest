import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function LikedGames(){
    const location = useLocation()
    const navigate = useNavigate()
    const gameList = location.state

    let likedGames = async () => {

        const likedGames = await fetch('http://localhost:5000/AllLikedGames')
        .then((data) => data.json())
        console.log(likedGames)
    }
    likedGames()

    
    let gameDetails = async (id) => {
      
        let data = await fetch(`http://localhost:5000/GetGameDetails/${id}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'}
        })
        .then((data) => data.json())
       

        navigate(`/GameDetails`,{state:data})
    }
    return (
        <>
        <div className="bg-background bg-cover h-screen">
        <button onClick={() => goBack()} className="font-bold text-2xl rounded-full justify-center items-center p-2 mt-7 w-36 mb-10 text-white bg-gradient-to-tr from-siteRed via-siteRed to-yellow-300">Go Back</button>
            <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"  >
            {gameList.map((cover) => (
                   <img src={cover.Img} onClick={() => gameDetails(cover.GameId)} className="w-64 p-4  flex justify-center items-center hover:scale-110  hover:drop-shadow-[0_3px_6px_rgba(255,255,255,0.5)]  cursor-pointer" ></img>
                ))}

            </div>
        
        </div>
        
        </>

    )
}




export default LikedGames
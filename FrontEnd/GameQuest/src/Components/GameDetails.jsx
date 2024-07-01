import { useEffect, useState,useRef  } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import LikedGames from "./LikedGames"

function GameDetails(){
    const location = useLocation()
    const gameDetails = location.state
    const videoRef = useRef(null);
    const navigate = useNavigate()
   
    // gameDetails.trailer = `https://www.youtube.com/watch?v=${gameDetails[0].videos[0]}`
    console.log(gameDetails)
    const [liked, SetLiked] = useState(false)
   const  LikeGame =  async () =>{
    // const { GameId, Name, Img, Desc, Genres } = req.body
    const preferenceBody = {GameId:gameDetails[0].id,Name:gameDetails[0].name,Img:gameDetails[0].hero,Themes:gameDetails[0].themes,Genres:gameDetails[0].genres}
    SetLiked(true)
    await fetch(`http://localhost:5000/LikeGame`, {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(preferenceBody)
      })
      .then(data => data.json())

     
    }

    const goBack =  async () => {
        navigate(-1)
    }


return(
    <>
    <main className="bg-background-sec  bg-cover h-full">
        <button onClick={() => goBack()} className="font-bold text-2xl rounded-full justify-center items-center p-4 mt-7 w-56 text-white bg-gradient-to-tr from-siteRed via-siteRed to-yellow-300">Go Back</button>
        <div className="p-16">
        <h1 className="text-white font-bold text-5xl p-8">{gameDetails[0].name}</h1>
        <div className="flex p-10">
        <div className="aspect-video w-full max-w-4xl mx-auto "> {/* Responsive video container */}
                        <iframe
                            width="853"
                            height="480"
                            src={gameDetails[0].trailer}  
                            title={`${gameDetails?.name} Trailer`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div> 
        <p className="text-white font-bold text-2xl p-12">{gameDetails[0].summary}</p>
        </div>
        <div className="flex justify-between">
        <p className="text-white font-bold text-2xl">IGDB Rating: {Math.floor(gameDetails[0].rating)}/100  </p>
        <button  className=" font-bold text-2xl rounded-full justify-center items-center p-3 mb-10  w-44 text-white bg-gradient-to-tr from-siteRed via-siteRed to-yellow-300" onClick={() => LikeGame()} disabled={liked}>Like Game</button>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
        {gameDetails[0].pics.map((ss) => (
                   <img src={ss} className="w-12/12 p-5 pr-1" ></img>
                ))}
        </div>
        
    </main>
    
    </>
    )
}




export default GameDetails
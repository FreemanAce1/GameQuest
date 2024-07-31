import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function GameDisplay(){
    const location = useLocation()
    const navigate = useNavigate()
    const gameData = location.state
    const [Loading,SetLoading] = useState(false)

    let gameDetails = async (num) => {
        const game = gameData[num].id
        let data = await fetch(`http://localhost:5000/GetGameDetails/${game}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'}
        })
        .then((data) => data.json())
       

        navigate(`/GameDetails`,{state:data})
    }

    const searchAgain = async () => {
        let userId = localStorage.getItem('userId')
        console.log('reached')
        SetLoading(true)
        let game = await fetch(`http://localhost:5000/GetGamesByHistory`, {
            method:'POST',
            headers:{'Content-Type':'application/json',
                'userId':userId
            }
        })
        .then(data => data.json())
        console.log(game)
        SetLoading(false)
        navigate(`/GameDisplay`,{state:game})

    }
    const LikedGames = async () => {
        const Liked = await fetch(`http://localhost:5000/AllLikedGames`)
        .then(data => data.json())
       
        navigate(`/likedGames`, {state:Liked})

    }

    console.log(gameData)
    return (
        <><div className="bg-background-autumn bg-cover h-full">
            <div className="flex-col justify-center w-50">
                <h1 className="text-white text-7xl font-bold p-5 w-screen text-center  "> Select A Game To Learn More or Search Again </h1>
                <div className="flex justify-around">
            <button onClick={() => searchAgain()} className="font-bold text-2xl rounded-full justify-center items-center p-4 mt-7 w-56 text-white bg-gradient-to-tr from-siteRed via-siteRed to-yellow-300 hover:scale-110 hover:cursor-pointer" disabled={Loading}>Search Again</button>
            <button onClick={() => LikedGames()} className="font-bold text-2xl rounded-full justify-center items-center p-4 mt-7 w-56   bg-gradient-to-tr from-siteRed via-siteRed to-yellow-300 text-white hover:scale-110 hover:cursor-pointer" disabled={Loading}>Liked Games</button>
            </div>

            </div>
            <div className="flex justify-around pt-32">
                <div className="w-96 mb-20  flex justify-center  items-center hover:scale-110  hover:drop-shadow-[0_3px_6px_rgba(255,255,255,0.5)]  cursor-pointer  transition-all" onClick={ () => gameDetails(0)}>
                     <img className='rounded-sm' src={gameData[0].cover}></img>
                </div>
                <div className="w-96 mb-20 transition-all flex justify-center items-center hover:scale-110 hover:drop-shadow-[0_3px_6px_rgba(255,255,255,0.5)]  cursor-pointer" onClick={() => gameDetails(1)}>
                     <img className="rounded-sm" src={gameData[1].cover}></img>
                </div>
                <div className="w-96 mb-20  transition-all flex justify-center items-center hover:scale-110 hover:drop-shadow-[0_3px_6px_rgba(255,255,255,0.5)]  cursor-pointer" onClick={() => gameDetails(2)}>
                     <img className="rounded-sm" src={gameData[2].cover}></img>
                </div>

            </div>
            
        </div></>

    )
}




export default GameDisplay
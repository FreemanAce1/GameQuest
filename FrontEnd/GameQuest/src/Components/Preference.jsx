import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Preference(){
// 187: PlayStation 5 
// 186: Xbox Series X/S
// 130: Nintendo Switch
// 18: PlayStation 4
// 1: Xbox One
// 16: PlayStation 3
// 14: Xbox 360
// 80: Wii U 
// 105: Wii
// 17: PlayStation Vita
// 24: Nintendo 3DS
// 4: PC
// 5: macOS
// 6: Linux
// 3: iOS
// 21: Android
// 11: Web (Browser Games)

const navigate = useNavigate()
const [loading,SetLoading] = useState(false)

const platformOptions  = [
  'PC',
  'PlayStation 5',
  'Xbox Series X|S',
  'Nintendo Switch',
  'Xbox One',
  'Oculus Quest',
  'PlayStation VR2',
  'PlayStation 4',
]



    const allGenres = [  
      'Adventure',
      'Indie',
      'Arcade',
      'Visual Novel',
      'Card & Board Game',
      'MOBA',
      'Point-and-click',
      'Fighting',
      'Shooter',
      'Music',
      'Platform',
      'Puzzle',
      'Racing',
      'Real Time Strategy (RTS)',
      'Role-playing (RPG)',
      'Simulator',
      'Sport',
      'Strategy',
      'Turn-based strategy (TBS)',
      'Tactical',
      "Hack and slash/Beat 'em up"
    ]

    const [CurrentStep , SetCurrentStep] = useState(1) 
    const [GenresState, SetGenresState] = useState([])
    const [PlatformState, SetPlatformState] = useState([])
    const [activeGenre, SetActiveGenre] = useState([])

    //   If genre is in array, take it out
    //   If genre is not in array, put it in

    function genreHandler(genre){
       GenresState.includes(genre) ? SetGenresState(GenresState.filter((currentGenre) => currentGenre !== genre )):
       SetGenresState([...GenresState,genre]) 
       console.log(GenresState)
    }

    function platformHandler(platform){
       PlatformState.includes(platform) ? SetPlatformState(PlatformState.filter((currentPlatform) => currentPlatform !== platform )):
       SetPlatformState([...PlatformState,platform]) 
       console.log(PlatformState)
    }
    
    let submitHandler = async () =>{
      SetLoading(true)
        const preferenceBody = {Genres:GenresState,Platforms:PlatformState}
        let userId = localStorage.getItem(`userId`)
        let games = await fetch(`http://localhost:5000/GetGamesStart`, {
          method:'POST',
          headers: {'Content-Type':'application/json','userId':userId},
          body:JSON.stringify(preferenceBody)
        })
        .then(data => data.json())
       
        SetLoading(false)
        navigate('/GameDisplay', {state:games})
    }



    





    return (
        <>
        {CurrentStep == 1 && (
            <div className="bg-background h-screen text-white bg-cover ">
                <h1 className="bg-black m-auto w-7/12 text-6xl flex items-center justify-center p-8 font-bold">What Genres Do You Like To Play?</h1>
                <div className=" justify-center items-center m-auto">
                    <div className=" max-w-8xl  flex flex-wrap m-auto items-center justify-center">
                {allGenres.map((genre) => (
                    <button className={`p-7 m-5 justify-center items-center transition-all flex font-bold text-white ${GenresState.includes(genre) ? "bg-gradient-to-tr from-siteRed via-siteRed to-siteYellow" : "bg-black border-4 border-siteRed" } rounded-full w-1/6 hover:scale-110 c`} onClick={() => genreHandler(genre)}>
                        {genre}
                    </button>
                ))}
                </div>
                <div className="flex justify-center ">
                <button className="font-bold text-2xl rounded-full justify-center items-center p-6 mt-7 w-96 bg-gradient-to-tr from-siteRed via-siteRed to-siteYellow hover:scale-110 transition-all"  onClick={() => SetCurrentStep(2)}>Submit</button>
                </div>
                </div>
            </div>


        )}

{CurrentStep == 2 && (
  <div className="bg-background-sec h-screen text-white bg-cover">
    <h1 className="bg-black text-6xl flex flex-wrap items-center justify-center p-20 font-bold transition-all">What Platform Do You Play On?</h1>
    <div className="flex-col justify-center items-center m-auto">
      <div className="max-w-8xl flex flex-wrap m-auto items-center justify-center">
        {platformOptions.map((platformName) => (
          <button
            key={platformName}
            className={`p-8 m-5 transition-all justify-center items-center flex font-bold  text-white ${PlatformState.includes(platformName) ? "bg-gradient-to-tr from-siteCyan via-siteCyan to-siteGreen text-black" : "bg-black border-4 border-siteCyan" } rounded-full w-1/6 hover:scale-110 c`}
            onClick={() => platformHandler(platformName)}
          >
            {platformName}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="font-bold text-2xl rounded-full justify-center items-center p-6 mt-20 w-96 
          bg-siteGreen text-black transition-all hover:scale-110"
          onClick={() => submitHandler()} disabled={loading}
        >
      
          Submit

        </button>
      </div>
    </div>
  </div>
)}



        </>

    )
}




export default Preference
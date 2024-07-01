import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main.jsx'
import Preference from './Components/Preference.jsx';
import GameDisplay from './Components/GameDisplay.jsx';
import GameDetails from './Components/GameDetails.jsx';
import LikedGames from './Components/LikedGames.jsx';
import './index.css'

const router = createBrowserRouter([
  {path:'/',
    element:<Main/>
  },
  {path:'/Preference',
    element:<Preference/>
  },
  {path:'/GameDisplay',
    element:<GameDisplay/>
  },
  {path:'/GameDetails',
    element:<GameDetails/>
  },
  {path:'/LikedGames',
    element:<LikedGames/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

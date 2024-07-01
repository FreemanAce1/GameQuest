/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0B090A',
        secondary:'#161A1D',
        siteRed:"#ff0000",
        siteYellow:"#ffCC00",
        siteCyan:"#00FFFF",
        siteGreen:"#CCFF66"
      },
      backgroundImage:{
        'hero':"url('./src/assets/Image/scattered-forcefields.svg')",
        'background':"url('./src/assets/Image/layered-waves-haikei.svg')",
        'background-sec':"url('./src/assets/Image/layered-waves-haikei-sec.svg')",
        'background-autumn':"url('./src/assets/Image/blob-scene-haikei.svg')"
      },
      backgroundColor:{
        'redYellow':"background: linear-gradient(180deg, rgba(255,204,0,1) 11%, rgba(255,0,0,1) 54%, rgba(255,0,0,1) 55%);"
      }
    },
  },
  plugins: [],
}
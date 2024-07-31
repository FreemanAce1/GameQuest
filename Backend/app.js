const express = require("express");
const cors = require("cors");
const db = require(`./db/models`);
const { where } = require("sequelize");
const app = express();
const igdb = require('igdb-api-node').default;


const themeObj = {
  44: 'Romance',
  1: 'Action',
  17: 'Fantasy',
  18: 'Science_fiction',
  19: 'Horror',
  20: 'Thriller',
  21: 'Survival',
  22: 'Historical',
  23: 'Stealth',
  27: 'Comedy',
  28: 'Business',
  31: 'Non_fiction',
  33: 'Sandbox',
  34: 'Educational',
  34: 'Kids',
  38: 'Open_world',
  39: 'Warfare',
  40: 'Party',
  41: 'FX',
  42: 'Erotic',
  43: 'Mystery',
  44: 'Romance'

}

const reversedThemeObj = {
  Romance: 44,
  Action: 1,
  Fantasy: 17,
  Science_fiction: 18,
  Horror: 19,
  Thriller: 20,
  Survival: 21,
  Historical: 22,
  Stealth: 23,
  Comedy: 27,
  Business: 28,
  Non_fiction: 31,
  Sandbox: 33,
  Educational: 34,
  Kids: 34,
  Open_world: 38,
  Warfare: 39,
  Party: 40,
  FX: 41,
  Erotic: 42,
  Mystery: 43,
  Romance: 44,
};






const genreOBJ = {
  'Quiz/Trivia': 26,
  Adventure: 31,
  Indie: 32,
  Arcade: 33,
  'Visual Novel': 34,
  'Card & Board Game': 35,
  MOBA: 36,
  'Point-and-click': 2,
  Fighting: 4,
  Shooter: 5,
  Music: 7,
  Platform: 8,
  Puzzle: 9,
  Racing: 10,
  'Real Time Strategy (RTS)': 11,
  'Role-playing (RPG)': 12,
  Simulator: 13,
  Sport: 14,
  Strategy: 15,
  'Turn-based strategy (TBS)': 16,
  Tactical: 24,
  "Hack and slash/Beat 'em up": 25
}


const reversedGenreObj = {
  2: 'Point-and-click',
  4: 'Fighting',
  5: 'Shooter',
  7: 'Music',
  8: 'Platform',
  9: 'Puzzle',
  10: 'Racing',
  11: 'Real Time Strategy (RTS)',
  12: 'Role-playing (RPG)',
  13: 'Simulator',
  14: 'Sport',
  15: 'Strategy',
  16: 'Turn-based strategy (TBS)',
  24: 'Tactical',
  25: "Hack and slash/Beat 'em up",
  26: 'Quiz/Trivia',
  31: 'Adventure',
  32: 'Indie',
  33: 'Arcade',
  34: 'Visual Novel',
  35: 'Card & Board Game',
  36: 'MOBA'
};



const correctDbGenres = {
  'Quiz/Trivia': 'Quiz_Trivia',
  'Arcade': 'Arcade',
  Adventure: 'Adventure',
  Indie: 'Indie',
  'Visual Novel': 'Visual_Novel',
  'Card & Board Game': 'Card_and_Board_Game',
  MOBA: 'MOBA',
  'Point-and-click': 'Point_and_click',
  Fighting: 'Fighting',
  Shooter: 'Shooter',
  Music: 'Music',
  Platform: 'Platform',
  Puzzle: 'Puzzle',
  Racing: 'Racing',
  'Real Time Strategy (RTS)': 'Real_Time_Strategy_RTS',
  'Role-playing (RPG)': 'Role_playing_RPG',
  Simulator: 'Simulator',
  Sport: 'Sport',
  Strategy: 'Strategy',
  'Turn-based strategy (TBS)': 'Turn_based_strategy_TBS',
  Tactical: 'Tactical',
  "Hack and slash/Beat 'em up": 'Hack_and_slash_Beat_em_up'
};



const correctIgdbGenres = {
  'Quiz_Trivia': 'Quiz/Trivia',
  Pinball: 'Pinball',
  Adventure: 'Adventure',
  Indie: 'Indie',
  'Visual_Novel': 'Visual Novel',
  'Card_and_Board_Game': 'Card & Board Game',
  MOBA: 'MOBA',
  'Point_and_click': 'Point-and-click',
  Fighting: 'Fighting',
  Shooter: 'Shooter',
  Music: 'Music',
  Platform: 'Platform',
  Puzzle: 'Puzzle',
  Racing: 'Racing',
  'Real_Time_Strategy_RTS': 'Real Time Strategy (RTS)',
  'Role_playing_RPG': 'Role-playing (RPG)',
  Simulator: 'Simulator',
  Sport: 'Sport',
  Strategy: 'Strategy',
  'Turn_based_strategy_TBS': 'Turn-based strategy (TBS)',
  Tactical: 'Tactical',
  'Hack_and_slash_Beat_em_up': "Hack and slash/Beat 'em up"
};




const platformOBJ = {
  'PC': 6,
  'PlayStation 5': 167,
  'Xbox Series X|S': 169,
  'Nintendo Switch': 130,
  'Xbox One': 49,
  'Oculus Quest': 384,
  'PlayStation VR2': 390,
  'Meta Quest 2': 386,
  'PlayStation 4': 48
}
const platformDbOBJ = {

  'PC': 'PC',
  'PlayStation 5': 'PlayStation_5',
  'Xbox Series X|S': 'Xbox_Series_XS',
  'Nintendo Switch': 'Nintendo_Switch',
  'Xbox One': 'Xbox_One',
  'Oculus Quest': 'Oculus_Quest',
  'PlayStation VR2': 'PlayStation_VR2',
  'Meta Quest 2': 'Meta_Quest_2',
  'PlayStation 4': 'PlayStation_4'
}

const reversedPlatformDbOBJ = {
  PC: 'PC',
  PlayStation_5: 'PlayStation 5',
  Xbox_Series_XS: 'Xbox Series X|S',
  Nintendo_Switch: 'Nintendo Switch',
  Xbox_One: 'Xbox One',
  Oculus_Quest: 'Oculus Quest',
  PlayStation_VR2: 'PlayStation VR2',
  Meta_Quest_2: 'Meta Quest 2',
  PlayStation_4: 'PlayStation 4'
};





app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:5173',
  credentials: true
}));



// Get games based on requirements


app.post('/newUser', async (req, res) => {
  const userId = req.headers['x-user-id']
  await db.User.create({ id: userId })
  await db.Genre.create({ UserId: userId })
  await db.Platform.create({ UserId: userId })
  await db.Theme.create({ UserId: userId })
})

app.post("/GetGamesStart", async (req, res) => {

  let userId = req.headers.userid
  try {
    const { Genres, Platforms } = req.body
    let genreIds = []
    for (let genre of Genres) {
      genreIds.push(genreOBJ[genre])
    }
    let platformIds = []
    for (let platform of Platforms) {
      platformIds.push(platformOBJ[platform.trim()])
    }
    let link = ''
    if (genreIds.length > 0 && genreIds[0] !== '') {
      link += `genres=(${genreIds.join(`,`)})`
    }
    if (platformIds.length && platformIds[0] !== '') {
      link += (genreIds.length > 0 ? ' & ' : '') + `platforms=(${platformIds.join(',')})`;
    }

    if (link.length && link[0] !== '') {
      link += '&'
    }

    const countResponse = await igdb('vdmp7wso1cq6cpdfs1o0ktpievtxgc', 'sp0xdjb0z8gbj0n1c28hfd6mqfous7')
      .fields(['id'])
      .limit(1)
      .where(`${link} aggregated_rating > 70 & category=0`)
      .request('/games/count');

    const totalCount = countResponse.data.count;
    const randomNum = Math.floor(Math.random() * totalCount);




    const response = await igdb('vdmp7wso1cq6cpdfs1o0ktpievtxgc', 'sp0xdjb0z8gbj0n1c28hfd6mqfous7')
      .fields(['id', 'name', 'genres', 'cover', 'summary'])
      .limit(3)
      .offset(randomNum)
      .where(`${link} aggregated_rating > 70 & category=0`)
      .request('/games')

    const games = await response.data.map(gameOBJ => ({ id: gameOBJ.id, name: gameOBJ.name, cover: gameOBJ.cover, summary: gameOBJ.summary /* screenshot:gameOBJ.screenshots genres:gameOBJ.genres, platforms:gameOBJ.platforms,rating:gameOBJ.aggregated_rating*/ }))

    for (let genre of Genres) {

      const columnName = correctDbGenres[genre];
      await db.Genre.increment(columnName, {
        by: 1,
        where: { UserId: userId }
      })
    }
    for (let platform of Platforms) {
      const columnName = platformDbOBJ[platform]

      const updatedData = { [columnName]: true }

      await db.Platform.update(updatedData, { where: { UserId: userId } })

    }

    const gameIds = games.filter(game => game !== undefined).map(game => game.id);
    let images = await igdb('vdmp7wso1cq6cpdfs1o0ktpievtxgc', 'sp0xdjb0z8gbj0n1c28hfd6mqfous7')
      .fields(['url'])
      .where(`game=(${gameIds.join(`,`)})`)
      .request('/covers')


    for (let i = 0; i < 3; i++) {
      games[i].cover = images.data[i].url.replace('t_thumb', 't_1080p')
    }

    console.log(games)
    res.send(games);

  } catch (error) {
    console.error(error)
  }


});



app.post('/GetGamesByHistory', async (req, res) => {

  let userId = req.headers.userid

  try {
    const genresCount = await db.Genre.findOne({ where: { 'UserId': userId } })
    let sortedGenres = Object.entries(genresCount.dataValues)
      .filter(([key]) => key !== 'id' && key !== "createdAt" && key !== "updatedAt" && key !== "UserId")
      .sort(([, value], [, valueB]) => valueB - value)
      .map(([genre, count]) => [correctIgdbGenres[genre], count])


    const platform = await db.Platform.findOne({ where: { 'UserId': userId } })

    let acceptedPlatforms = Object.entries(platform.dataValues)
      .filter(([key]) => key !== `id` && key !== "createdAt" && key !== "updatedAt" && key !== 'UserId')
      .map(([platform, owned]) => [reversedPlatformDbOBJ[platform], owned])
      .filter(([, bool]) => bool !== false)

    const totalWeight = sortedGenres.reduce((sum, [, value]) => sum + value, 0)
    let randomNum = Math.random() * totalWeight
    let selectedGenre
    for (let [genre, count] of sortedGenres) {
      randomNum -= count
      if (randomNum <= 0) {
        selectedGenre = genre
        break
      }

    }
    let themes = await db.Theme.findOne({ where: { 'UserId': userId } })

    let accepetedThemes = Object.entries(themes.dataValues
    )
      .filter(([key, value]) => key !== `id` && key !== "createdAt" && key !== "updatedAt" && key !== "updatedAt" && value !== 0)
      .sort(([, value], [, valueB]) => valueB - value)
    let themeCount = 0
    for (let i of accepetedThemes) {
      themeCount += i[1]
    }
    let themeIds = []
    let counter = 0
    if (themeCount >= 8) {
      for (let i of accepetedThemes) {
        if (counter < 2) {
          themeIds.push(reversedThemeObj[i[0]])
          counter++
        }

        else { break }
      }
    }





    let genre = genreOBJ[selectedGenre]


    let platformId = []
    for (let plat of acceptedPlatforms) {
      platformId.push(platformOBJ[plat[0]])
    }

    let link = `aggregated_rating > 70 & category=0`

    if (platformId.length && platformId[0] !== '') {

      link += ` & platforms=(${platformId.join(',')})`

    }

    if (genre) {
      link += ` & genres=(${genre})`
    }


    if (themeIds.length && themeIds[0] !== '') {
      link += ` & themes=(${themeIds.join(',')})`
    }

    const countResponse = await igdb('vdmp7wso1cq6cpdfs1o0ktpievtxgc', 'sp0xdjb0z8gbj0n1c28hfd6mqfous7')
      .fields(['id'])
      .limit(1)
      .where(link)
      .request('/games/count');



    const totalCount = countResponse.data.count;



    const randomNum1 = Math.floor(Math.random() * totalCount) + 1;



    const response = await igdb('vdmp7wso1cq6cpdfs1o0ktpievtxgc', 'sp0xdjb0z8gbj0n1c28hfd6mqfous7')
      .fields(['id', 'name', 'genres', 'cover', 'summary', 'themes'])
      .limit(3)
      .offset(randomNum1)
      .where(link)
      .request('/games')

    const games = await response.data.map(gameOBJ => ({ id: gameOBJ.id, name: gameOBJ.name, cover: gameOBJ.cover, summary: gameOBJ.summary, Theme: gameOBJ.themes /* screenshot:gameOBJ.screenshots genres:gameOBJ.genres, platforms:gameOBJ.platforms,rating:gameOBJ.aggregated_rating*/ }))

    const gameIds = games.map(game => game.id);
    let images = await igdb('vdmp7wso1cq6cpdfs1o0ktpievtxgc', 'sp0xdjb0z8gbj0n1c28hfd6mqfous7')
      .fields(['url', 'game'])
      .where(`game=(${gameIds.join(`,`)})`)
      .request('/covers')



    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (games[i].id == images.data[j].game) {
          games[i].cover = images.data[j].url.replace('t_thumb', 't_1080p')
        }

      }

    }


    // Assign cover URLs to the games





    res.send(games)
  } catch (error) {
    console.error(error)
  }



})



// Get details about a Game
app.post('/GetGameDetails/:id', async (req, res) => {
  try {
    const id = req.params.id

    const response = await igdb('vdmp7wso1cq6cpdfs1o0ktpievtxgc', 'sp0xdjb0z8gbj0n1c28hfd6mqfous7')
      .fields(['id', 'name', 'genres', 'themes', 'summary', 'platforms', 'involved_companies', 'screenshots', `videos`, 'aggregated_rating', 'websites'])
      .where(`id=(${id})`)
      .request('/games')


    const games = await response.data.map(gameOBJ => ({ id: gameOBJ.id, name: gameOBJ.name, genres: gameOBJ.genres, themes: gameOBJ.themes, platforms: gameOBJ.platforms, rating: gameOBJ.aggregated_rating, cover: gameOBJ.cover, Company: gameOBJ.involved_companies, screenshots: gameOBJ.involved_companies, summary: gameOBJ.summary, wesbite: gameOBJ.websites, videos: gameOBJ.videos }))


    const trailer = await igdb('vdmp7wso1cq6cpdfs1o0ktpievtxgc', 'sp0xdjb0z8gbj0n1c28hfd6mqfous7')
      .fields(['video_id'])
      .where(`game=(${games[0].id})`)
      .request('/game_videos')


    if (games[0].videos) {
      games[0].trailer = `https://www.youtube.com/embed/${trailer.data[0].video_id}?autoplay=1&mute=0`
    }

    let ss = []

    let images = await igdb('vdmp7wso1cq6cpdfs1o0ktpievtxgc', 'sp0xdjb0z8gbj0n1c28hfd6mqfous7')
      .fields(['url'])
      .where(`game=(${games[0].id})`)
      .limit(5)
      .request('/screenshots')
    for (let i of images.data) {
      i = i.url.replace('t_thumb', 't_1080p')
      ss.push(i)
    }

    games[0].pics = ss

    let cover = await igdb('vdmp7wso1cq6cpdfs1o0ktpievtxgc', 'sp0xdjb0z8gbj0n1c28hfd6mqfous7')
      .fields(['url'])
      .where(`game=${games[0].id}`)
      .request('/covers')


    games[0].hero = cover.data[0].url.replace('t_thumb', 't_1080p')

    res.send(games)
  } catch (error) {
    res.status(500).json({ errorMessage: error.message })
  }
})

//Add Game to Server
app.post('/LikeGame', async (req, res) => {
  let userId = req.headers.userid
  try {
    const { GameId, Genres, Themes, Img } = req.body
    for (let genre of Genres) {
      const rightGenre = reversedGenreObj[genre]
      await db.Genre.increment(correctDbGenres[rightGenre], {
        by: 1,
        where: { 'UserId': userId }

      })

    }


    for (let theme of Themes) {
      const dbTheme = themeObj[theme]
      await db.Theme.increment(dbTheme,
        { by: 1, where: { 'UserId': userId } }
      )
    }

    await db.likedGames.create({ UserId: userId, gameId: GameId, gameImg: Img })

    res.status(200).send('Game Liked')
  } catch (error) {
    res.status(500).json({ errorMessage: error })
  }
})


app.get('/AllLikedGames', async (req, res) => {

  const allGames = await db.Liked_Game_Info.findAll({ attributes: ['Name', 'Img', 'GameId'] })

  res.send(allGames)
})


app.get('/RecentlyLikedGames', async (req, res) => {

  const allGames = await db.Liked_Game_Info.findAll({ attributes: ['Name', 'Img', 'Desc'], order: [['id', 'DESC']], limit: 3 })

  res.send(allGames)
})








db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log(`server is up and running on port 5000`);
  });
});

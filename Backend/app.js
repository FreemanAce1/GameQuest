const express = require("express");
const cors = require("cors");
const db = require(`./db/models`);
const { where } = require("sequelize");
const app = express();

app.use(express.json());
app.use(cors());

// Get games based on requirements
// if 5 games in the LikedGameInfo table Flip a coin
// Heads/odd:Grab 3 columns from Genre with highest count and select randomly select one of those 3. Make a requirement var = to genre
// Tails/even: Move on to next step
// Get pool of games and select the first one that meets a requirement

app.get("/GetGames", async (req, res) => {
  try {
    const GenreCount = await db.Genres.findOne({ where: { id: 1 } });
    const GameCount = await db.Liked_Game_Info.count();
    let sortedGenre = Object.entries(GenreCount.dataValues)
      .filter(
        ([key]) => key !== "id" && key !== "createdAt" && key !== "updatedAt"
      )
      .sort(([, counta], [, countb]) => countb - counta);

    let result;
    let coin = Math.floor(Math.random() * 100);
    console.log(coin);
    if (coin % 2 == 0) {
      coin = "Heads";
    } else {
      coin = "Tails";
    }
    console.log(coin);
    while (!result) {
      let page = Math.floor(Math.random() * 10000) + 1;
      let gamePool = await fetch(
        `https://api.rawg.io/api/games?key=28fb78a17eda404aa847a75fcad0d0b6&page_size=10&page=${page}`
      );
      gamePool = await gamePool.json();
      gamePool = gamePool.results;
      for (let game of gamePool) {
        if (GameCount >= 5 && coin == "Heads") {
          if (game.rating >= 3.8 && game.ratings_count >= 50) {
            for (let genre of game.genres) {
              if (
                genre.name == sortedGenre[0][0] ||
                genre.name == sortedGenre[1][0]
              ) {
                return res.json(game);
              }
            }
          }
        } else if (game.rating >= 3.8 && game.ratings_count >= 50) {
          res.json(game);
          return;
        }
      }
    }
  } catch (error) {
    res.status(500).json({errorMessage:error})
  }
});


// Get details about a Game
app.get('/GetGameDetails/:id', async (req,res) => {
try {
  const id = req.params.id
const game = fetch(`https://api.rawg.io/api/games/${id}?key=28fb78a17eda404aa847a75fcad0d0b6&page_size=10&page=${page}`)
.then(data => data.json())
res.json(game)
} catch (error) {
  res.status(500).json({errorMessage:error})
}
})

//Add Game to Server
app.post('/LikeGame', async (req,res) =>{
try {
  const {GameId,Name,Img,Desc} = req.body
  const post = await db.Liked_Game_Info.create({GameId,Name,Img,Desc})
  res.status(200).send('Game Liked')
} catch (error) {
  res.status(500).json({errorMessage:error})
}
})


app.get('/AllLikedGames', async (req,res) =>{

  const allGames = await db.Liked_Game_Info.findAll({attributes:['Name','Img','Desc']})

  res.send(allGames)
})


app.get('/RecentlyLikedGames', async (req,res) =>{

  const allGames = await db.Liked_Game_Info.findAll({attributes:['Name','Img','Desc'],order:[['id','DESC']],limit:3})

  res.send(allGames)
})




db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log(`server is up and running on port 5000`);
  });
});

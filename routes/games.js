// routes/games.js
const gamesRouter = require("express").Router();

const { getAllGames } = require("../middlewares/games");
const { sendAllGames, sendUpdatedGames } = require("../controllers/games");

gamesRouter.get("/games", getAllGames, sendAllGames);

module.exports = gamesRouter;
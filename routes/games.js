// Файл routes/games.js
const gamesRouter = require('express').Router();

const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
  checkIfUsersAreSafe,
  checkIsGameExists,
  checkIsVoteRequest
} = require('../middlewares/games');

const {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted
} = require('../controllers/games');

const { checkAuth } = require("../middlewares/auth.js");

gamesRouter.get('/games', findAllGames, sendAllGames);

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  createGame,
  sendGameCreated,
  checkAuth
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  updateGame,
  sendGameUpdated,
  checkAuth
);

gamesRouter.delete('/games/:id', deleteGame, sendGameDeleted, checkAuth)

module.exports = gamesRouter;
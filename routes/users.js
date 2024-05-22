// routes/users.js
const usersRouter = require('express').Router();

const { getAllUsers } = require('../middlewares/users');
const { sendAllUsers, sendUpdatedUsers } = require("../controllers/users");

usersRouter.get("/users", getAllUsers, sendAllUsers);

module.exports = usersRouter;
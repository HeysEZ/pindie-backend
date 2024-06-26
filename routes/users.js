// routes/users.js
const usersRouter = require('express').Router();

const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  filterPassword,
  hashPassword
} = require('../middlewares/users');

const { sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
  sendMe
} = require("../controllers/users");

const { checkAuth } = require("../middlewares/auth.js");

usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);

usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);

usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
);

usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;
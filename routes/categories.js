// routes/categories.js
const categoriesRouter = require("express").Router();

const { getAllCategories } = require("../middlewares/categories");
const { sendAllCategories, sendUpdatedCategories } = require("../controllers/categories");

categoriesRouter.get("/categories", getAllCategories, sendAllCategories);

module.exports = categoriesRouter;
const userRoutes = require("express").Router();

const { login } = require("./userHandler")

userRoutes.post("/login", login);

module.exports = userRoutes;


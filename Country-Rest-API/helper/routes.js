const baseRouter = require("express").Router();

const userRoutes = require("../modules/user/userRoutes");
const countryRoutes = require("../modules/countries/countryRoutes");

baseRouter.use("/user", userRoutes);
baseRouter.use("/country", countryRoutes);

module.exports = baseRouter;
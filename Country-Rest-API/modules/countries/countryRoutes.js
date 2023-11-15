const countryRoutes = require("express").Router();
const { isAuthenticatedUSer } = require("../../helper/auth")

const { 
    countryDetails,
    countryList
 } = require("./countryHandler");

countryRoutes.get("/countrydetails", isAuthenticatedUSer, countryDetails);
countryRoutes.get("/countrylist", isAuthenticatedUSer, countryList);

module.exports = countryRoutes;


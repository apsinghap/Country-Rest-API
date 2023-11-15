const express = require("express");
const bodyParser = require("body-parser");
const server = express();

const baseRouter = require("./helper/routes");
let PORT = 3000; 

server.use(bodyParser.json({ limit: "100mb" }));
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", (req, res) => {
    res.send("I am a server")
});

server.use("/baserouter", baseRouter)

const start = async () => {
    try {
        server.listen(PORT, () => {
            console.log(`I am live in port no. ${PORT}`)
        })
    } catch (error) {
        console.log("ERROR", error)
    }
}

start()


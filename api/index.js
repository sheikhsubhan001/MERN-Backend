const express = require("express");
const cors = require('cors');
// const bodyparser = require("body-parser");

const app = express();
require('../Connection/Connection');
const Main = require('../Router/Router');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Root route to avoid 404
app.get("/", (req, res) => {
    res.send("🚀 Backend is running on Vercel!");
});

app.use('/GoTo', Main);

// Prevent favicon errors
app.get("/favicon.ico", (req, res) => res.status(204).end());


// const port = 7000;
// app.listen(port, ()=>{
//     console.log("Server is Running on Port : "+port);
// })
module.exports = app;
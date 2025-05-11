const express = require("express");
const cors = require('cors');
// const bodyparser = require("body-parser");

const app = express();
require('./Connection/Connection');
const Main = require('./Router/Router');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/GoTo', Main);

module.exports= app;
// const port = 7000;
// app.listen(port, '0.0.0.0', ()=>{
//     console.log("Server is Running on Port : "+port);
// })
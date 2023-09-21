const express = require("express");
require("../src/db/conn");

const MenRanking=require("../src/models/mens");
const MensRanking = require("../src/models/mens");
const router = require("./routers/men");


const app=express();
const port=process.env.PORT || 3000;

app.use(express.json());
app.use(router);




app.listen(port, ()=>{
    console.log(`Connection is live at this port no. ${port}`);
})
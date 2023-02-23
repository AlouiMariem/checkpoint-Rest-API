const express = require("express");

const app = express();
const connectDB = require("./config/db");



const port = 4000;

app.use(express.json()); 

connectDB();
app.use("/api/users",require("./routes/User"));

app.listen(port,()=>console.log(`app is working on port ${port}`));;
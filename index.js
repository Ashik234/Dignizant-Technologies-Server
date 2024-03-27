const express = require("express")
const app = express()
const dbConfig = require("./config/DBconfig");
const cors = require("cors")
require("dotenv").config();
const userRouter = require("./routes/userRouter")
app.use(express.json())

app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST"],
    credentials:true
}))

app.use("/",userRouter)

const port = process.env.port
app.listen(port,()=>{
    console.log(`Server Started Running On Port ${port}`);
})
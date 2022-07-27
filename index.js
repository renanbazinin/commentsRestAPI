const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");

const commentController = require("./controllers/commentController")


const app = express();
//const port = 8001;
const port = process.env.PORT;
app.use(cors({origin: 'http://localhost:3000'}));
connectDB()
//They converted  what
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/",commentController)


app.listen(port,()=>{
    console.log("App is listening")
    console.log("http://localhost:"+port)
}

)

const express = require("express")
const userRoute = require("./route/user.route")
const connection = require("./db")


const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home")
})

// app.use("/user", userRoute)


app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to the db")
    } catch (error) {
        console.log(error)
    }

    console.log("server is running on port 8080")
})

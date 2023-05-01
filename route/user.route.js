const express = require("express")
const { async } = require("q")
const userModel = require("../model/user.model")

const userRoute = express.Router()

userRoute.get("/", async(req,res)=>{
    try {
        let data = await userModel.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

userRoute.post("/login",async(req,res)=>{
    let {email,password} = req.body

    try {
        let data = await userModel.findOne({email:email,password:password})
        if(data){
            console.log(data)
            res.send("Successfully login")
        } else{
            res.send("wrong credential")
        }
        
    } catch (error) {
        res.send(error)
    }
})


userRoute.post("/register",async(req,res)=>{
    let body = req.body

    try {
        let data = new userModel(body)

        await data.save()
        res.send("new user registered successfully")
        
    } catch (error) {
        res.send(error)
    }
})


module.exports = userRoute


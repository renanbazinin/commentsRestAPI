const express = require("express");
const router = express.Router()
const commentBL = require("../services/commentsServices")
const axios = require('axios');

router.route("/").get( async (req,res) =>{


    const data = await commentBL.getAllcomments()
    return res.json(data)
})

router.route("/:id").get( async (req,res)=>{

    const id = req.params.id
    const obj = await commentBL.getcommentsById(id)
    return res.json(obj)
})


router.route("/rotter").get( async (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const options ={
        headers:{
  
        'Access-Control-Allow-Origin' : '*',
    
        }

        }
        const obj = await axios.get("https://rotter.net/rss/rotternews.xml",options) 
        console.log("respon to rotter") 
        console.log(res)
        return res.json(obj)
    

})


router.route("/").post(async (req,res)=>{
  try{
   const comment = req.body;
   console.log(comment)
   const respon = await commentBL.addcomment(comment) 
   return res.json(respon)
  }
  catch(err){
    return res.json(err)
 }
})

router.route("/:id").put(async (req,res)=>{
    console.log("put")
    const id = req.params.id//the param catch in url
    const comment = req.body
    const obj = await commentBL.updatecomments(id,comment)
 
    
    return res.json(obj)
 })

 router.route("/:id").delete(async (req,res)=>{
   
    const id = req.params.id//the param catch in url
    await commentBL.deletecomments(id)
    return res.json()
 })



module.exports = router;
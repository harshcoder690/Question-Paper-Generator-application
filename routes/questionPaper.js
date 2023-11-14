const express = require("express");
const router = new express.Router();
const createPaper = require("../utils/createPaper");
const parseJSON = require("../utils/parseJSON");
require("dotenv").config();

router.post("/api/v1/getQuestions", async (req,res) =>{
    try{
        const parsedQuestions = await parseJSON("./config/question.json");
        const paper = createPaper(req.body,parsedQuestions)
    
        res.status(200).send(paper)
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

module.exports = router;



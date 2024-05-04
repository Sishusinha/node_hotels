const express = require('express');
const router =  express.Router();
const person = require("../models/person");

router.get("/", function (req, res) {
    res.send("Hello World");
  });
  


router.get("/", async (req, res) => {
    try {
      const data = await person.find();
      console.log("data fetched");
      res.status(200).json(data);
  
    } catch (err) {
      console.log("Error occured", err);
      res.status(500).json({ error: "internal server error" });
    }
  });
  
  

router.get("/:workType", async (req, res) => {
    try {
      const workType = req.params.workType; // extracxting workType parameter from url
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        
        const response = await person.find({work : workType});
        console.log("response fetched");
        res.status(200).json(response);
    
      }
      else{
        res.status(404).json({error : 'Invalid workType'});
      }
      
    } catch (err) {
      console.log("Error occured", err);
      res.status(500).json({ error: "internal server error" });
    }
  });
  
router.post("/", async (req, res) => {
    try {
      const data = req.body; // Assuming request body contains the person data
  
      //Create a new person document suing mongoose model
      const newPerson = new person(data);
  
      // save the data of new person to database
      const response = await newPerson.save();
      console.log("data saved to mongodb server");
      res.status(200).json(response);
  
    } catch (err) {
      console.log("Error occured", err);
      res.status(500).json({ error: "internal server error" });
    }
  });


  router.put('/:id',async(req,res)=>{
    try{
         const id = req.params.id;
         const updatedRequest = req.body;

         const response = await person.findByIdAndUpdate(id,updatedRequest,{
            new:true,
            runValidators:true
         });


         if(!response){
            res.status(404).json({error: 'person not found'});
         }

         console.log('Data updated');
         res.status(200).json({message:'Data successfully updated',response});
         
    }
    catch(err){
        console.log("Error occured", err);
        res.status(500).json({ error: "internal server error" });
    }
  })


  module.exports = router;
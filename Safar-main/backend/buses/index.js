const express = require('express');
const router = express.Router();


require("./routes/locatioInfo")();

router.post('/get-location-info',async (req,res)=>{
   var responseJson= await getLocationInfo(req,res);
    res.json(responseJson);
})


router.post('/post-location-info',async (req,res)=>{
    var responseJson=await postLocationInfo(req,res);
    
    res.json(responseJson);
})

module.exports=router;
    


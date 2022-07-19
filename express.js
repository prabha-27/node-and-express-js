const express=require('express');
const app=express();
app.use('/add-product',(req,res,next)=>{
    console.log('im in middleware');
    res.send('<h1>quadra systems coimbatore</h1>');
    });
    app.use('/',(req,res,next)=>{
        console.log('im in middleware');
        res.send('<h1>quadra systems chennai ,banglore</h1>');
    });
    app.listen(4000);
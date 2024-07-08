const express=require('express');
const app =express();

const authRouter= require('./router/authrout');
const databaseconnect=require('./config/databaseconfig');
databaseconnect();

app.use(express.json());

app.use('/api/auth/',authRouter);

app.use('/',(req,res)=>{
    res.status(200).json({data:'jwt auth server sintu'});
});

module.exports=app;

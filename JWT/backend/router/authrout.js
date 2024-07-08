const express=require('express');
const { signup, getuser} = require('../controller/authcontroller');
const authRouter=express.Router();

authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.get('/getuser', getuser);

module.exports=authRouter;
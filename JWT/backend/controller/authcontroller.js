const userModel = require("../model/userschema");

const signup = async (req, res, next) => {
 const {name, email, password, confirmpassword}=req.body;
 console.log(name, email, password, confirmpassword);
 if (!name || !email || !password || !confirmpassword){
    return res.status(400).json({
        success: false,
        message:"Every field is required"
    })
}

const validEmail = emailValidator.Validate(email);
if(!validEmail){
    return res.status(400).json({
        success: false,
        message: 'please provide a valid email id'
    })
}
if (password != confirmpassword) {
    return res.status(400).json({
        success: false,
        message: 'password and confirm password doesnt  match'
    })
}

 try {
    const userinfo = userModel(req.body);
    const result = await userinfo.save();
    
   

    return res.status(200).json({
        success:true,
       data:result
    });
   }
  catch(e) {
    if (e.code === 11000){
        return res.status(400).json({
            success: false,
            message: 'account already exit with email id '
        });
    };
    return res.status(400).json({
        success: false,
        message: e.message
    })
 }
}

const signin =(req,res)=>{
    
}
const getuser = async (req, res, next) => {
    const userId = req.user.id;
    try {
        const user = await userModel.findById(userId);
        return res.status(200).json({
            success:true,
            data: user
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }

}

module.exports = {
    signup,
    signin,
    getuser
}
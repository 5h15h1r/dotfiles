const User = require('../models/userModel')
const generateToken = require('../config/generateToken')

const registerUser = async (req, res) =>{
    const {name,email, password, picture} = req.body
    
    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please enter all the fields")
    }
    
    const userExists = await User.findOne({email})

    if (userExists){
        res.status(400);
        throw new Error("User already exists")
    }
    const user = await User.create({
        name,
        email,
        password,
        picture
    })

    if(user){
        res.status(201).json({
            _id : user.id,
            name : user.name,
            email : user.email,
            picture : user.picture,
            token: generateToken(user._id)
        })
    }else{
        res.status(400);
        throw new Error("Failed to create User")
    }
}

const loginUser = async (req,res) => {
    const {email, password} = req.body;
    
    const user = await User.findOne({email});
    // console.log(user)
    if (user && (await user.matchPassword(password))){
       res.json({msg:"login successful"})
    }
}

const allUsers = async (req,res) => {
    const keyword = req.query.search ? {
        $or:[
            { name : { $regex : req.query.search, $options: "i" }},
            { email : { $regex : req.query.search, $options: "i"}}
        ]
    } 
    :
    {
        // Do nothing
    }
    console.log(keyword)
    const users = await User.find(keyword)
    res.send(users)
    // res.json({msg:keyword})
}

module.exports = { registerUser, loginUser, allUsers }
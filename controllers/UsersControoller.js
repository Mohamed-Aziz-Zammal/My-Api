const UsersModel =require('../models/Users')
const bcrypt =require('bcrypt');
const jwt =require ('jsonwebtoken');
/*const createUsers = async (req,res)=>{
    const {name,age,email,password}=req.body;

    const newUsers =await UsersModel.create({name,age,email})

    res.json(newUsers)
}*/
const register = async (req,res)=>{
    const { name,date ,classe,email,password} = req.body

    const user = await UsersModel.findOne({name})
  
    if(user){
      return res.json({message:"user already exists!"})
  
    }
  
    const hashedPassword = bcrypt.hashSync(password,10)
    
    const newUser =new UsersModel({
      name :name,
      date:date,
      classe:classe,
      email:email,
      password:hashedPassword 
    });
  
    await newUser.save();
  
    return res.json({message:"user created successfully"})
}

const login =async (req,res)=>{
    const {email ,password} = req.body
    const user = await UsersModel.findOne({email})
    if(!user){
      return res.json({message:"email doesn't exists!"})
  
    }
  
    const isPasswordValid = await bcrypt.compare(password,user.password)
  
    if(!isPasswordValid){
      return res.json({message:"email or password is not correct"})
  
    }
  
    const token = jwt.sign({id: user._id},"sarra")
  
    return res.json({token, userID:user._id})
  
  }
 
  const getUser = async (req, res) => {
    const { UserId } = req.params;
    try {
      const user = await UsersModel.findById(UserId);
      res.json(user);
    } catch (error) {
      res.status(404).json({ message: 'user not found' });
    }
  };

  const updateUser = async (req, res) => {
    const { UserId } = req.params;
    const { name,date ,classe,email } = req.body;
    try {
      const updateUser = await UsersModel.findByIdAndUpdate(
        UserId,
        { name,date ,classe,email },
        { new: true }
      );
      res.json(updateUser);
    } catch (error) {
      res.status(404).json({ message: 'UserId not found' });
    }
  };





module.exports={
     register ,
     login,
     getUser,
     updateUser
};
const express= require('express')
const router = express.Router();

const { register,login,getUser,updateUser}=require('../controllers/UsersControoller')



router.post('/register',register)
router.post('/login',login)
router.get('/user/:UserId',getUser)
router.put('/user/:UserId',updateUser)
    

module.exports= router
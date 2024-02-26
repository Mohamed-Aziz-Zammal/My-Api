const express= require('express')
const router = express.Router();

const {register,login,getAllUsers,createmedecin,updatMedecin} =require('../controllers/AdminController')


//admin
router.post('/register',register)
router.post('/login',login)
//users
router.get('/getAllUsers',getAllUsers)

//medecin
router.post('/createmedecin',createmedecin)
router.put('/updatMedecin',updatMedecin) 

module.exports= router
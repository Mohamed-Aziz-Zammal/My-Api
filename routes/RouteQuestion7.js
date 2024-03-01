const express= require('express')
const router = express.Router()

const { CreateQuestion7,oneQuestion7}=require('../controllers/Question7Controller')



router.post('/CreateQuestion7',CreateQuestion7)
router.get('/oneQuestion7',oneQuestion7)


module.exports= router
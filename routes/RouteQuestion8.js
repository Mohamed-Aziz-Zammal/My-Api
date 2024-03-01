const express= require('express')
const router = express.Router()

const { CreateQuestion8,oneQuestion8}=require('../controllers/Question8Controller')



router.post('/CreateQuestion8',CreateQuestion8)
router.get('/oneQuestion8',oneQuestion8)


module.exports= router
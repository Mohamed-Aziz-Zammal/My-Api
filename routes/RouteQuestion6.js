const express= require('express')
const router = express.Router()

const { CreateQuestion6,oneQuestion6}=require('../controllers/Question6Controller')



router.post('/CreateQuestion6',CreateQuestion6)
router.get('/oneQuestion6',oneQuestion6)


module.exports= router
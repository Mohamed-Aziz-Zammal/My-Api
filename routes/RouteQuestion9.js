const express= require('express')
const router = express.Router()

const { CreateQuestion9,oneQuestion9}=require('../controllers/Question9Controller')



router.post('/CreateQuestion9',CreateQuestion9)
router.get('/oneQuestion9',oneQuestion9)


module.exports= router
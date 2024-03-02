const express= require('express')
const router = express.Router();

const { CreateQuestion5,oneQuestion5}=require('../controllers/Question5Controller')



router.post('/CreateQuestion5',CreateQuestion5)
router.get('/oneQuestion5',oneQuestion5)


module.exports= router
const express= require('express')
const router = express.Router();

const { CreateQuestion2,oneQuestion2}=require('../controllers/Question2Controller')



router.post('/CreateQuestion2',CreateQuestion2)
router.get('/oneQuestion2',oneQuestion2)


module.exports= router
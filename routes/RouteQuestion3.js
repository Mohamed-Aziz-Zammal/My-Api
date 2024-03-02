const express= require('express')
const router = express.Router();

const { CreateQuestion3,oneQuestion3}=require('../controllers/Question3Controller')



router.post('/CreateQuestion3',CreateQuestion3)
router.get('/oneQuestion3',oneQuestion3)


module.exports= router
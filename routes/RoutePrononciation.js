const express= require('express')
const router = express.Router();

const { CreatePrononciation,onePrononciation}=require('../controllers/PrononciationController')



router.post('/CreatePrononciation',CreatePrononciation)
router.get('/onePrononciation',onePrononciation)


module.exports= router
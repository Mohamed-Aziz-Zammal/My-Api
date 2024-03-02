const express= require('express')
const router = express.Router();

const { CreateQuestion1,oneQuestion1}=require('../controllers/Question1Controller')



router.post('/CreateQuestion1',CreateQuestion1)
router.get('/oneQuestion1',oneQuestion1)


module.exports= router
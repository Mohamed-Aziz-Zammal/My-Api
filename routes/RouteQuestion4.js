const express= require('express')
const router = express.Router();

const { CreateQuestion4,oneQuestion4}=require('../controllers/Question4Controller')



router.post('/CreateQuestion4',CreateQuestion4)
router.get('/oneQuestion4',oneQuestion4)


module.exports= router
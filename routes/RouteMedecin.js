const express= require('express')
const router = express.Router();

const {login,getMedecin,updateMedecin} =require('../controllers/MedecinController')



router.post('/login',login)
router.get('/espaceMedecin/:MedecinID',getMedecin)
router.put('/espaceMedecin/:MedecinID',updateMedecin)


module.exports= router
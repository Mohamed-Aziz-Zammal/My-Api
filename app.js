const express= require('express')
const db = require('./db')


const app = express();
app.use(express.json())

const cors = require ("cors")
app.use(cors())

//routes de users
const UsersRoute =require('./routes/RouteUsers')
app.use("/users",UsersRoute)

//routes de admin
const AdminRoute =require('./routes/RouteAdmin')
app.use("/admin",AdminRoute)

//routes de admin 
const MedecinRoute =require('./routes/RouteMedecin')
app.use("/medecin",MedecinRoute)

const testRoute =require('./routes/RoutePrononciation')
app.use("/test",testRoute)

const Question6Route =require('./routes/RouteQuestion6')
app.use("/Question6",Question6Route)




app.listen(3001, () => {console.log("Server started")});
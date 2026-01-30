const express =require('express')
const connectDB = require('./db/db')
const songRoutes=require('./routes/song.routes')
const cors=require('cors')


connectDB()
const app = express()
app.use(cors())
app.use(express.json())


app.use('/',songRoutes)



module.exports = app
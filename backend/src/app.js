const express =require('express')
const connectDB = require('./db/db')
const songRoutes=require('./routes/song.routes')
const cors=require('cors')
const path=require('path')

connectDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,'../public')))

app.use('/',songRoutes)

app.get('*name',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app
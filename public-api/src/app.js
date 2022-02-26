const express = require('express')
const path = require('path')
const dataRouter = require('./controllers/data')
const app = express()

app.use(express.urlencoded({extended: true}))



app.use('/',dataRouter)
app.get('/',(_req,res)=>{
    res.sendFile(path.join(__dirname,'views','form.html'))
})
app.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})




module.exports = { app }
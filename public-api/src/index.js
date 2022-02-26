const { app } = require('./app')
const http = require('http')
const { mongoInit } = require('./config/mongo')

require('dotenv').config()

const PORT = process.env.PORT || 3000

const main = async () => {
    await mongoInit()
    http.createServer(app).listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
    })
}
main()
const mongoose = require('mongoose')

const mongoInit = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.error(error)
    }
    
}

module.exports = { mongoInit }

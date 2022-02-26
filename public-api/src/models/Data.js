const Mongoose = require('mongoose')

const DataSchema = new Mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    filePath: { type: String, required: true },
})

const Data = new Mongoose.model('data', DataSchema)

module.exports = Data
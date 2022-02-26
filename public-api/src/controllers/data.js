const { Router } = require("express");
const path = require('path');
const upload = require("../config/multer");
const Data = require("../models/Data");

const dataRouter = Router()

dataRouter.get('/data/:id', async (req, res) => {
    try {
        const record = await Data.findById(req.params.id).exec()

        if (record) {
            res.json({ ...record["_doc"] })

        } else {
            res.status(404).json({ message: 'Record not found' })

        }

    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }

})
dataRouter.post('/data', upload.single('file'), async (req, res) => {
    const { name, age } = req.body
    // validation helper or middleware
    if (!name || !age) return res.status(422).json({ error: 'No name or age' })

    const record = new Data({ name, age, filePath: req.file.path })

    await record.save()

    res.status(201).json({ message: 'Record created', id: record["_id"] })
})




module.exports = dataRouter
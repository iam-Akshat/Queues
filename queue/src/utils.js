const fs = require('fs/promises');
const path = require('path');

const readStore = async () => {
    const data = await fs.readFile(path.join(__dirname, 'store.txt'), { encoding: 'utf8' })
    return data
}

const writeStore = async (value) => {
    await fs.writeFile(path.join(__dirname, 'store.txt'), `${value}`)
}

module.exports = { readStore, writeStore }
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name:String,
    pass:String
})

module.exports = mongoose.model('form',schema)
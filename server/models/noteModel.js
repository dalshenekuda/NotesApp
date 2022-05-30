const {Schema, model} = require('mongoose')

const Note = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    completed: {type: Boolean, required: true, default:false},
})

module.exports = model('Note', Note)
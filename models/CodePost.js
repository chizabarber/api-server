// ------------------------------------------------------
const mongoose = require('mongoose')
const { Schema } = mongoose
// ------------------------------------------------------

const codePostSchema = new Schema({
    icon: String,
    title: String,
    date: String,
    content: String
})

// ------------------------------------------------------
mongoose.model('codePost', codePostSchema)
// ------------------------------------------------------
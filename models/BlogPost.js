// ------------------------------------------------------
const mongoose = require('mongoose')
const { Schema } = mongoose
// ------------------------------------------------------

const blogPostSchema = new Schema({
    img: String,
    title: String,
    snippet: String,
    content: String,
    date: String
})

// ------------------------------------------------------
mongoose.model('blogPost', blogPostSchema)
// ------------------------------------------------------
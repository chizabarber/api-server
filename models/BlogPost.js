// ------------------------------------------------------
const mongoose = require('mongoose')
const { Schema } = mongoose
// ------------------------------------------------------

const blogPostSchema = new Schema({
    id: Number,                                     // Note: needed id for hard-coded version of blogData; may not need it for MongoDB implementation;
    img: String,
    title: String,
    snippet: String,
    text: String
})

// ------------------------------------------------------
mongoose.model('blogPosts', blogPostSchema)
// ------------------------------------------------------
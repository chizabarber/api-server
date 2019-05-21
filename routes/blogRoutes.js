// ------------------------------------------------------
const { Path } = require('path-parser')
// ------------------------------------------------------
const blog = require('../content/blogData')
// ------------------------------------------------------

module.exports = (app) => {
    app.get('/blog', (req, res) => {
        res.send(blog)
    })
    app.get('/api/blog', (req, res) => {
        res.send(blog) 
    })
    app.get('/blog/:id', (req, res) => {
        const path = new Path('/blog/:id')
        const match = path.test(req.originalUrl)
        if (match) {
            res.send(blog.posts[match.id - 1])
        }
    })
    app.get('/api/blog/:id', (req, res) => {
        const path = new Path('/api/blog/:id')
        const match = path.test(req.originalUrl)
        if (match) {
            res.send(blog.posts[match.id - 1])
        }
    })
}

// ------------------------------------------------------
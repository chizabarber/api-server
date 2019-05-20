// ------------------------------------------------------
const { Path } = require('path-parser')
// -------------------------------------------------

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

const blog = {
    posts: [
        {
            id: 1,
            title: 'Pardon My Mess...',
            text: `This will be the future home of my blog, which is being rendered isometrically on the server and the browser.`
        },
        {
            id: 2,
            title: '... As I Test My Blog',
            text: `The content will render whether Javascript is turned on or off, and will remain SEO-accessible.`
        }
    ]
}

// ------------------------------------------------------
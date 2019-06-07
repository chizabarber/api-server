// ------------------------------------------------------
const mongoose = require('mongoose')
const { Path } = require('path-parser')
// ------------------------------------------------------
const BlogPost = mongoose.model('blogPost')
// ------------------------------------------------------

module.exports = (app) => {
    app.get(
        '/blog_posts', 
        async (req, res) => {
            const blogPosts = await BlogPost.find({})
            res.send(blogPosts)
        }
    )
    app.get(
        '/api/blog_posts', 
        async (req, res) => {
            const blogPosts = await BlogPost.find({})
            res.send(blogPosts)
        }
    )
    app.get(
        '/blog_posts/:id',
        async (req, res) => {
            const path = new Path('/blog_posts/:id')
            const match = path.test(req.originalUrl)
            if (match) {
                const blogPost = await BlogPost.findOne({
                    _id: match.id
                })
                console.log(match)
                res.send(blogPost)
            }
        }
    )
    app.get(
        '/api/blog_posts/:id',
        async (req, res) => {
            const path = new Path('/api/blog_posts/:id')
            const match = path.test(req.originalUrl)
            if (match) {
                const blogPost = await BlogPost.findOne({
                    _id: match.id
                })
                res.send(blogPost)
            }
        }
    )
    app.post(
        '/submit_blog',
        async (req, res) => {
            const {
                img, title, snippet, content, date
            } = req.body
            const blogPost = new BlogPost({
                img, title, snippet, content, date
            })
            try {
                await blogPost.save()
            } catch (err) {
                res.status(422).send(err)
            }
        }
    )
    app.post(
        '/api/submit_blog',
        async (req, res) => {
            const {
                img, title, snippet, content, date
            } = req.body
            const blogPost = new BlogPost({
                img, title, snippet, content, date
            })
            try {
                await blogPost.save()
            } catch (err) {
                res.status(422).send(err)
            }
        }
    )
}

// ------------------------------------------------------
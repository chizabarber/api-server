// ------------------------------------------------------
const mongoose = require('mongoose')
// ------------------------------------------------------
const CodePost = mongoose.model('codePost')
// ------------------------------------------------------

module.exports = (app) => {
    app.post(
        '/api/submit_code',
        async (req, res) => {
            const { icon, title, date, content } = req.body
            const code = new CodePost({
                icon, title, date, content
            })
            try {
                await code.save()
            } catch (err) {
                res.status(422).send(err)
            }
        }
    )
    app.post(
        '/submit_code',
        async (req, res) => {
            const { icon, title, date, content } = req.body
            const code = new CodePost({
                icon, title, date, content
            })
            try {
                await code.save()
            } catch (err) {
                res.status(422).send(err)
            }
        }
    )
    app.get(
        '/api/code_posts',
        async (req, res) => {
            const codePosts = await CodePost.find({})
            res.send(codePosts)
        }
    )
    app.get(
        '/code_posts',
        async (req, res) => {
            const codePosts = await CodePost.find({})
            res.send(codePosts)
        }
    )
}

// ------------------------------------------------------
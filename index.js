// ------------------------------------------------------
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
// ------------------------------------------------------
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')
// ------------------------------------------------------

mongoose.connect(
    keys.mongoURI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
    }
)
mongoose.Promise = global.Promise

const app = express()

process.env.NODE_ENV=keys.environment
app.use((req, res, next) => {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== 'development') {
        return res.redirect('https://' + req.get('host') + req.url)
    }
    next();
})
app.use(cors())
app.use(bodyParser.json({
    type: '*/*'
}))
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/userRoutes')(app)
require('./routes/blogRoutes')(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(
            __dirname, 
            'client', 
            'build', 
            'index.html'
        ))
    })
}

const port = process.env.PORT || 5000
const server = http.createServer(app)
server.listen(port)
console.log('api-server listening on port', port)

// ------------------------------------------------------
// ------------------------------------------------------
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
// const cors = require('cors')
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

// const whitelist = ['http://localhost:3000']                 // Todo: implement CORS config when in production mode
// const corsOptions = {
//     origin: (origin, callback) => {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

// app.use(cors(corsOptions))
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
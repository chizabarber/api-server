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

app.get('/', (req, res) => {
    let adminContent = `
        <div>
            You don't appear to be logged in.  
            You can log in by visiting
            <a href="/auth/google">the Authentication Route</a>. 
            You could also look at details about yourself at 
            <a href="/current_user">the Current User route</a>
        </div>
    `
    if (req.user) {
        adminContent = `
            <div>
                You appear to be logged in, so you can visit 
                <a href="/admins">the Admins route</a>
                or you can <a href="/logout">Logout</a>.
            </div>
        `
    }
    res.send(`
        <div>
            <h4>Welcome to the SolipSystem API!</h4>
            <div>
                You can see <a href="/users">the Users route</a>.
            </div>
            ${adminContent}
        </div>
    `)
})

const port = process.env.PORT || 5000
const server = http.createServer(app)
server.listen(port)
console.log('api-server listening on port', port)

// ------------------------------------------------------
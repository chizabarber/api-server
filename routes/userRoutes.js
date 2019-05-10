// ------------------------------------------------------
require('mongoose')
// ------------------------------------------------------
const requireLogin = require('../middlewares/requireLogin')
// ------------------------------------------------------

module.exports = (app) => {
    app.get('/users', (req, res) => {
        res.send(users)
    })
    app.get('/api/users', (req, res) => {
        res.send(users)
    })
    app.get('/admins', requireLogin, (req, res) => {
        res.send(admins)
    })
    app.get('/api/admins', requireLogin, (req, res) => {
        res.send(admins)
    })
}

const users = [
    { id: 1, name: 'Leanne Graham' },
    { id: 2, name: 'Ervin Howell' },
    { id: 3, name: 'Clementine Bauch' },
    { id: 4, name: 'Patricia Lebsack' },
    { id: 5, name: 'Chelsey Dietrich' }
]
const admins = [
{ id: 1, name: 'Kurtis Weissnat' },
{ id: 2, name: 'Nicholas Runolfsdottir' },
{ id: 3, name: 'Gelann Reichert' },
{ id: 4, name: 'Moriah Stanton' },
{ id: 5, name: 'Rey Padberg' }
]

// ------------------------------------------------------
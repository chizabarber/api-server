// ------------------------------------------------------
import React, { Component } from 'react'
// ------------------------------------------------------
import requireAuth from '../hocs/requireAuth'
import AdminDash from './AdminDash'
import UserDash from './UserDash'
// ------------------------------------------------------

class Dashboard extends Component {
    render () {
        const auth = this.props.auth
        if (auth.googleId === '104115147170088126221') {
            return (
                <AdminDash />
            )
        } else {
            return (
                <UserDash />
            )
        }
    }
}

// ------------------------------------------------------
export default requireAuth(Dashboard)
// -----------------------------------------------------
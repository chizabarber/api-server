// ------------------------------------------------------
import React, { Component } from 'react'
// ------------------------------------------------------
import keys from '../../config/keys'
import requireAuth from '../hocs/requireAuth'
import AdminDash from './AdminDash'
import UserDash from './UserDash'
// ------------------------------------------------------

class Dashboard extends Component {
    render () {
        const auth = this.props.auth
        if (auth.googleId === keys.adminID) {
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
// ------------------------------------------------------
import React from 'react'
import { connect } from 'react-redux'
// ------------------------------------------------------

const Header = ({ auth }) => {
    console.log('My auth status is', auth)
    const authButton = auth ? (
        <a href='/api/logout'>Log Out</a>
    ) : (
        <a href='/api/auth/google'>Log In</a>
    )
    return (
        <nav
            style={{ backgroundColor: '#367da2' }}
        >
            <div className='nav-wrapper'>
                <a 
                    href='http://localhost:3000/'
                    className='brand-logo'
                >
                    Chiza Barber
                </a>
                <ul className='right'>
                    <li><a href='/users'>Users</a></li>
                    <li><a href='/admins'>Admins</a></li>
                    <li>{authButton}</li>
                </ul>
            </div>
        </nav>
    )
}

// ------------------------------------------------------
function mapStateToProps ({ auth }) {
    return { auth }
}
// ------------------------------------------------------
export default connect(mapStateToProps)(Header)
// ------------------------------------------------------
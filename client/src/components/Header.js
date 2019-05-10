// ------------------------------------------------------
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// ------------------------------------------------------

const Header = ({ auth }) => {
    console.log('My auth status is', auth)
    const authButton = auth ? (
        <a href='/api/logout' className='black-text'
            >Log Out
        </a>
    ) : (
        <a href='/api/auth/google' className='black-text'>
            Log In
        </a>
    )
    return (
        <nav
            style={{
                backgroundColor: '#fff',
                borderTop: '10px solid #367da2',
                paddingBottom: '60px'
            }}
        >
            <div className='nav-wrapper'>
                <Link 
                    to='/'
                    className='brand-logo'
                    style={{
                        color: '#367da2',
                        marginLeft: '1%'
                    }}
                >
                    CHIZA BARBER | dev
                </Link>
                <ul className='right'>
                    <li>
                        <a href='/users' className='black-text'>
                            Users
                        </a>
                    </li>
                    <li>
                        <a href='/admins' className='black-text'>
                            Admins
                        </a>
                    </li>
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
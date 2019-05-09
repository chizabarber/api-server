// ------------------------------------------------------
import React from 'react'
// ------------------------------------------------------

const Header = () => {
    return (
        <nav>
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
                </ul>
            </div>
        </nav>
    )
}

// ------------------------------------------------------
export default Header
// ------------------------------------------------------
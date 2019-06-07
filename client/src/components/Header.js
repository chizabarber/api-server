// ------------------------------------------------------
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
// ------------------------------------------------------
import BrandLogo from './BrandLogo'
// ------------------------------------------------------

const Header = ({ auth }) => {
    console.log('My auth status is', auth)
    useEffect(() => {
        const sidenav = document.querySelector('.sidenav')
        M.Sidenav.init(sidenav, {})
    })
    const authButton = auth ? (
        <a href='/api/logout' className='white-text'>
            Log Out
        </a>
    ) : (
        <a href='/api/auth/google' className='white-text'>
            Log In
        </a>
    )
    return (
        <div className='navbar-fixed'>
            <nav
                style={{
                    backgroundColor: '#fff',
                    borderTop: '10px solid #367da2',
                    paddingBottom: '60px'
                }}
            >
                <div className='nav-wrapper'>
                    <BrandLogo />
                    {/* eslint-disable-next-line */}
                    <a 
                        href='#' 
                        data-target='mobile' 
                        className='sidenav-trigger'
                    >
                        <i className='material-icons black-text'>
                            menu
                        </i>
                    </a>
                    <ul className='right hide-on-med-and-down'>
                        <li>{authButton}</li>
                        <li>
                            <Link to='/code' className='black-text'>
                                Code
                            </Link>
                        </li>
                        <li>
                            <a href='/projects' className='black-text'>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a 
                                href='https://www.chizabarber.com' 
                                style={{
                                    color: '#367da2',
                                    fontSize: '1.5rem'
                                }}
                            >
                                <span style={{ color: '#000' }}>
                                |
                                </span>
                                <span style={{ marginLeft: '10px' }}>
                                    com
                                </span>
                            </a>
                        </li>
                    </ul>
                    <ul className='sidenav' id='mobile'>
                        <li>{authButton}</li>
                        <li>
                            <a href='/code' className='black-text'>
                                Code
                            </a>
                        </li>
                        <li>
                            <a href='/projects' className='black-text'>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a 
                                href='https://www.chizabarber.com' 
                                style={{
                                    color: '#367da2',
                                    fontSize: '1.5rem'
                                }}
                            >
                                <span style={{ color: '#000' }}>
                                |
                                </span>
                                <span style={{ marginLeft: '10px' }}>
                                    com
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

// ------------------------------------------------------
function mapStateToProps ({ auth }) {
    return { auth }
}
// ------------------------------------------------------
export default connect(mapStateToProps)(Header)
// ------------------------------------------------------
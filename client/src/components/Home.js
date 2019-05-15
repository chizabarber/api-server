// ------------------------------------------------------
import React from 'react'
// ------------------------------------------------------
import architecture from '../images/architecture.png'

const Home = () => {
    const renderLinks = () => {
        return (
            <div>
                <a 
                    href='https://github.com/chizabarber/ssr-server'
                    className='btn-flat'
                    style={{
                        color: '#367da2'
                    }}
                >
                    ssr-server
                </a>
                <a 
                    href='https://github.com/chizabarber/api-server'
                    className='btn-flat'
                    style={{
                        color: '#367da2'
                    }}
                >
                    api-server
                </a>
            </div>
        )
    }
    return (
        <div
            className='center-align'
            style={{ marginTop: '5%' }}
        >
            <div 
                style={{ height: '74vh' }}
                className='container'
            >
                <h3
                    style={{
                        color: '#367da2'
                    }}
                >
                    A Home for Code
                </h3>
                <hr style={{
                        width: '25%',
                        marginTop: '30px',
                        marginBottom: '30px'
                    }} />
                <p>
                    This sister site to 
                    <a 
                        href='http://www.chizabarber.com'
                        style={{ padding: '5px', color: '#367da2' }}
                    >
                        ChizaBarber.com
                    </a>
                    will serve as a space for my projects and
                    experiments as I continue on my coding journey.
                </p>
                <p>
                    The first of these projects are the Chiza Barber 
                    sites themselves. Below is a diagram of the
                    sites' architecture and how they interact. 
                    They are a work in progress, each with its own 
                    set of challenges despite their simplicity.
                </p>
                {renderLinks()}
                <img 
                    src={architecture} 
                    alt='architecture'
                    style={{
                        width: '115%',
                        marginBottom: '3%',
                        paddingRight: '15%'
                    }}
                />
            </div>
            <div
                style={{
                    backgroundColor: '#367da2',
                    height: '50px',
                    marginTop: '3%',
                    color: 'white'
                }}
            >
                <p style={{
                    position: 'relative',
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}>
                    Copyright 2019 © Chiza Barber
                </p>
            </div>
        </div>
    )
}

// ------------------------------------------------------
export default Home
// ------------------------------------------------------
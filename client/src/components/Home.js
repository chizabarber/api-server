// ------------------------------------------------------
import React from 'react'
// ------------------------------------------------------

const Home = () => {
    return (
        <div
            className='center-align'
            style={{ marginTop: '200px' }}
        >
            <div style={{ height: '62vh' }}>
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
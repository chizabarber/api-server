// ------------------------------------------------------
import React from 'react'
// ------------------------------------------------------

const Home = () => {
    return (
        <div
            className='center-align'
            style={{ marginTop: '200px' }}
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
                    href='www.chizabarber.com'
                    style={{ padding: '5px' }}
                >
                    ChizaBarber.com
                </a>
                will serve as a space for my projects and
                experiments as I continue on my coding journey.
            </p>
            {/* <div
                style={{
                    backgroundColor: '#367da2',
                    height: '6%',
                    paddingTop: '1%',
                    color: 'white'
                }}
            >
                Copyright 2019 © Chiza Barber
            </div> */}
        </div>
    )
}

// ------------------------------------------------------
export default Home
// ------------------------------------------------------
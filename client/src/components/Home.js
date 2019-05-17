// ------------------------------------------------------
import React from 'react'
// ------------------------------------------------------
import architecture from '../images/architecture.png'
import Button from './Button'
import Footer from './Footer'
// ------------------------------------------------------

const Home = () => {
    const renderLinks = () => {
        return (
            <div>
                <Button
                    url='https://github.com/chizabarber/ssr-server'
                    text='ssr-server'
                    className='left-button btn-flat'
                />
                <Button
                    url='https://github.com/chizabarber/api-server'
                    text='api-server'
                    className='right-button btn-flat'
                />
            </div>
        )
    }
    return (
        <div
            className='center-align'
            style={{ marginTop: '5%' }}
        >
            <div 
                style={{ marginBottom: '6%' }}
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
                        href='https://www.chizabarber.com'
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
                        paddingRight: '15%'
                    }}
                />
                <p>
                    ChizaBarber.com is the <b>ssr-server</b> above,
                    and ChizaBarber.dev is the <b>api-server</b>. 
                </p>
                <p>
                    Getting a grasp of server-side rendering took
                    some time, as it's a considerable departure
                    from the architecture of traditional React apps
                    (which I'm also still learning!). I designed the 
                    two sites to work in tandem, one rendered 
                    server-side, and the other rendered client-side; 
                    that way, I'm forced to work with both rendering 
                    models on this project! Only way to learn. :)
                </p>
            </div>
            <Footer />
        </div>
    )
}

// ------------------------------------------------------
export default Home
// ------------------------------------------------------
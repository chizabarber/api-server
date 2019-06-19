// ------------------------------------------------------
import React, { Component } from 'react'
// ------------------------------------------------------
import PageTitle from '../PageTitle'
// ------------------------------------------------------

class SideGig extends Component {
    render () {
        return (
            <div
                className='center-align'
                style={{ marginTop: '5%' }}
            >
                <PageTitle 
                    blk1='|' blu1='dev'
                    blk2='·' blu2='SideGig'
                />
                <hr className='h-rule' />
            </div>
        )
    }
}

// ------------------------------------------------------
export default SideGig
// ------------------------------------------------------
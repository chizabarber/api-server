// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
// ------------------------------------------------------
import { fetchGitHubJobs } from '../../actions'
import PageTitle from '../PageTitle'
import DnDContainer from './DnDContainer'
// ------------------------------------------------------

class JobSeek extends Component {
    componentDidMount () {
        this.props.fetchGitHubJobs()
    }
    render () {
        return (
            <div
                className='center-align'
                style={{ marginTop: '5%' }}
            >
                <PageTitle 
                    blk1='|' blu1='dev'
                    blk2='·' blu2='JobSeek'
                />
                <hr className='h-rule' />
                <div className='container'>
                    <DnDContainer />
                </div>
            </div>
        )
    }
}

// ------------------------------------------------------
function mapStateToProps ({ jobs }) {
    return { jobs }
}
// ------------------------------------------------------
export default connect(
    mapStateToProps, { fetchGitHubJobs }
)(JobSeek)
// ------------------------------------------------------
// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown/with-html'
import M from 'materialize-css'
// ------------------------------------------------------
import { fetchCodePosts } from '../../actions'
import PageTitle from '../PageTitle'
// ------------------------------------------------------

class CodeList extends Component {
    componentDidMount () {
        this.props.fetchCodePosts()
        const collapsible = document.querySelector('.collapsible')
        M.Collapsible.init(collapsible, {})
    }
    renderList () {                                     // Done: map code posts to collapsibles
        const code = this.props.code
        return code.reverse().map(({ _id, icon, title, date, content }) => {
            return (
                <li key={_id}>
                    <div className='collapsible-header'>
                        <i className='material-icons'>{icon}</i>
                        {title}
                        <div className='date-right-align'>{date}</div>
                    </div>
                    <div className='collapsible-body left-align'>
                        <ReactMarkdown 
                            source={content}
                            escapeHtml={false}
                        />
                    </div>
                </li>
            )
        })
    }
    render () {
        return (
            <div
                className='center-align container'
                style={{ marginTop: '5%' }}
            >
                <PageTitle 
                    blk1='|'
                    blu1='dev'
                    blk2='·'
                    blu2='CODE'
                />
                <hr className='h-rule' />
                <ul className='collapsible popout'>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

// ------------------------------------------------------
function mapStateToProps ({ code }) {
    return { code }
}
// ------------------------------------------------------
export default connect(
    mapStateToProps,
    { fetchCodePosts }
)(CodeList)
// ------------------------------------------------------
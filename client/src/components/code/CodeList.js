// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown/with-html'
import M from 'materialize-css'
// ------------------------------------------------------
import { fetchCodePosts } from '../../actions'
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
                <h3
                    style={{
                        color: '#367da2'
                    }}
                >
                    <span style={{ color: '#000' }}>
                        |
                    </span>
                    <span style={{ marginLeft: '10px' }}>
                        dev
                    </span>
                    <span style={{ color: '#000', marginLeft: '10px' }}>
                        ·
                    </span>
                    <span style={{ marginLeft: '10px' }}>
                        CODE
                    </span>
                </h3>
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
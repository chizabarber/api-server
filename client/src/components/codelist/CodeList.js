// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    renderList () {                                     // Todo: map code posts to collapsibles
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
                        {content}
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
                    | dev · CODE
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
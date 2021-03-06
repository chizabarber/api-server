// ------------------------------------------------------
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
// ------------------------------------------------------
import { submitCodePost } from '../../actions'
// ------------------------------------------------------

class AdminDash extends Component {
    renderInput = ({ input, label }) => {
        return (
            <div className='input-field'>
                <input 
                    autoComplete='off'
                    type='text'
                    placeholder={label}
                    {...input}
                />
            </div>
        )
    }
    renderTextarea = ({ input, label }) => {
        return (
            <div className='input-field'>
                <textarea 
                    className='materialize-textarea'
                    autoComplete='off'
                    placeholder={label}
                    { ...input }
                />
            </div>
        )
    }
    onSubmit = (formValues) => {
        this.props.submitCodePost(formValues)
        this.props.history.push('/code')
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
                    > input codePost
                </h3>
                <hr className='h-rule' />
                <div className='row' style={{ margin: '100px' }}>
                    <form 
                        className='col s12'
                        onSubmit={this.props.handleSubmit(
                            this.onSubmit
                        )}
                    >
                        <Field
                            name='title'
                            label='Enter title here'
                            component={this.renderInput}
                        />
                        <Field
                            name='icon'
                            label='MaterializeCSS icon here'
                            component={this.renderInput}
                        />
                        <Field
                            name='content'
                            label='Enter content here'
                            component={this.renderTextarea}
                        />
                        <button
                            type='submit'
                            className='btn-flat center-button'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

// ------------------------------------------------------
export default compose(
    connect(null, { submitCodePost }),
    reduxForm({ form: 'codePostForm' })
)(withRouter(AdminDash))
// -----------------------------------------------------
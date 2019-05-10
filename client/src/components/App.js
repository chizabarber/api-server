// ------------------------------------------------------
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// ------------------------------------------------------
import { fetchUser } from '../actions'
import Header from './Header'
import Home from './Home'
// ------------------------------------------------------

class App extends Component {
    componentDidMount () {
        this.props.fetchUser()
    }
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path='/' component={Home} 
                    />
                </div>
            </BrowserRouter>
        )
    }
}

// ------------------------------------------------------
export default connect(null, { fetchUser })(App)
// ------------------------------------------------------
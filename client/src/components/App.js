// ------------------------------------------------------
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// ------------------------------------------------------
import '../styles/App.css'
import { fetchUser } from '../actions'
import Header from './Header'
import Home from './Home'
import Projects from './Projects'
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
                    <Route exact path='/' component={Home} />
                    <Route path='/projects' component={Projects} />
                </div>
            </BrowserRouter>
        )
    }
}

// ------------------------------------------------------
export default connect(null, { fetchUser })(App)
// ------------------------------------------------------
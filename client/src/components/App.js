// ------------------------------------------------------
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// ------------------------------------------------------
import '../styles/App.css'
import { fetchUser } from '../actions'
import Header from './Header'
import Home from './Home'
import Dashboard from './dash/Dashboard'
import CodeList from './code/CodeList'
import Projects from './Projects'
import Footer from './Footer';
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
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/projects' component={Projects} />
                    <Route exact path='/code' component={CodeList} />
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

// ------------------------------------------------------
export default connect(null, { fetchUser })(App)
// ------------------------------------------------------
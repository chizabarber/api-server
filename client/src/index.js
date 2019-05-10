// ------------------------------------------------------
import WebFont from 'webfontloader'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
// ------------------------------------------------------
import App from './components/App'
import reducers from './reducers'
// ------------------------------------------------------

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(reduxThunk))
)

WebFont.load({
    google: {
        families: ['Nunito:300,400,700', 'sans-serif']
    }
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)

// ------------------------------------------------------
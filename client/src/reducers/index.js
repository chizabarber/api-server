// ------------------------------------------------------
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// ------------------------------------------------------
import authReducer from './authReducer'
import codeReducer from './codeReducer'
import jobsReducer from './jobsReducer'
// ------------------------------------------------------

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    code: codeReducer,
    jobs: jobsReducer
})

// ------------------------------------------------------
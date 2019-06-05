// ------------------------------------------------------
import {
    SUBMIT_CODE_POST,
    FETCH_CODE_POSTS
} from '../actions/types'
// ------------------------------------------------------

export default function (state = [], action) {
    switch (action.type) {
        case SUBMIT_CODE_POST:
            return action.payload
        case FETCH_CODE_POSTS:
            return action.payload
        default:
            return state
    }
}

// ------------------------------------------------------
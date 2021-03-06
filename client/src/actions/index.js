// -------------------------------------------------
import axios from 'axios'
// -------------------------------------------------
import {
    FETCH_USER,
    SUBMIT_CODE_POST, FETCH_CODE_POSTS,
    FETCH_GITHUB_JOBS
} from './types'
// -------------------------------------------------

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user')
    dispatch({
        type: FETCH_USER,
        payload: res.data
    })
}

export const fetchCodePosts = () => async (dispatch) => {
    const res = await axios.get('/api/code_posts')
    dispatch({
        type: FETCH_CODE_POSTS,
        payload: res.data
    })
}

export const submitCodePost = (formValues) => async (dispatch) => {
    const icon = formValues.icon
    const title = formValues.title
    const content = formValues.content
    const date = new Date().toLocaleDateString()
    const res = await axios.post('/api/submit_code', {
        icon, title, content, date
    })
    dispatch({
        type: SUBMIT_CODE_POST,                     // Done: create codeReducer to catch this action creator
        payload: res.data
    })
}

export const fetchGitHubJobs = () => async (dispatch) => {
    const res = await axios.get(
        `${'https://cors-anywhere.herokuapp.com/'}https://jobs.github.com/positions.json?location=texas&page=1`,
        { crossDomain: true }
    )
    console.log(res)
    dispatch({
        type: FETCH_GITHUB_JOBS,
        payload: res.data
    })
}

// -------------------------------------------------
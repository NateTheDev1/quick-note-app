// case REGISTER_START: return {...state, authorizing: true}
// case REGISTER_FAIL: return {...state, authorizing: false, error: action.error}
// case REGISTER_OK: return {...state, authorizing: false, error: '', user: action.payload}

import axios from 'axios'
import { REGISTER_START, REGISTER_OK, REGISTER_FAIL } from './types'

const registerUser = (formValues) => dispatch => {
    dispatch({type: REGISTER_START})
    axios.post('https://quick-note-api.herokuapp.com/api/user/register', formValues).then(res => {
        console.log(res.data)
        dispatch({type: REGISTER_OK, payload: res.data})
    }).catch(error => {
        console.log(error)
        dispatch({type: REGISTER_FAIL, error: error.message})
    })
}
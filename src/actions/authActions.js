// case LOGIN_START: return {...state, authorizing: true}
// case LOGIN_FAIL: return {...state, error: action.error}
// case LOGIN_OK: return {...state, error: '', auth: true, authorizing: false, token: action.payload}

import axios from 'axios'
import { REGISTER_START, REGISTER_OK, REGISTER_FAIL, LOGIN_START, LOGIN_OK, LOGIN_FAIL } from './types'

export const registerUser =  (formValues) =>  dispatch => {

    dispatch({type: REGISTER_START})

    return axios.post('https://quick-note-api.herokuapp.com/api/user/register', formValues).then(async res => {
        await dispatch({type: REGISTER_OK, payload: res.data})
        return 'Ok'
    }).catch(async error => {
        await dispatch({type: REGISTER_FAIL, error: error.response.data})
        return error.response.data
    })
} 

export const loginUser = (formValues) => dispatch => {
    dispatch({type: LOGIN_START})

    return axios.post('https://quick-note-api.herokuapp.com/api/user/login', formValues).then(async res => {
        await dispatch({type: LOGIN_OK, payload: res.data})
        sessionStorage.setItem('token', res.data)
        return 'Ok'
    }).catch(async error => {
        await dispatch({type: LOGIN_FAIL, error: error.response.data})
        return error.response.data
    })
}
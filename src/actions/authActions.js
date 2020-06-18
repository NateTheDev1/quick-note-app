import jwt from 'jsonwebtoken'

import axios from 'axios'
import { REGISTER_START, REGISTER_OK, REGISTER_FAIL, LOGIN_START, LOGIN_OK, LOGIN_FAIL, SET_USER } from './types'

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
        getUser(res.data, dispatch)
        await dispatch({type: LOGIN_OK, payload: res.data})
        sessionStorage.setItem('token', res.data)
        return 'Ok'
    }).catch(async error => {
        await dispatch({type: LOGIN_FAIL, error: error.response.data})
        return error.response.data
    })
}

const getUser = async (token, dispatch)  =>  {
    let decoded = await jwt.decode(token)
    let uid = decoded._id
    axios.get(`https://quick-note-api.herokuapp.com/api/user/${uid}`).then(res => {
        dispatch({type: SET_USER, payload: res.data})
    }).catch(err => {
        alert(err.response.data)
    })
}
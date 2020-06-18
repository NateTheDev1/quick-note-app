// case REGISTER_START: return {...state, authorizing: true}
// case REGISTER_FAIL: return {...state, authorizing: false, error: action.error}
// case REGISTER_OK: return {...state, authorizing: false, error: '', user: action.payload}

import axios from 'axios'
import { REGISTER_START, REGISTER_OK, REGISTER_FAIL } from './types'

export const registerUser =  (formValues) =>  dispatch => {


    dispatch({type: REGISTER_START})

    console.log('Working')
    return axios.post('https://quick-note-api.herokuapp.com/api/user/register', formValues).then(async res => {
        await dispatch({type: REGISTER_OK, payload: res.data})
    }).catch(async error => {
        await dispatch({type: REGISTER_FAIL, error: error.response.data})
        return error.response.data
    })
}
import {axiosWithAuth} from '../helpers/axiosWithAuth'
import { ADD_NOTE, ADD_NOTE_START } from './types'

export const addNote = (formValues) => dispatch => {
    dispatch({type: ADD_NOTE_START})
    return axiosWithAuth().post('https://quick-note-api.herokuapp.com/api/notes', formValues).then(async res => {
        console.log(res.data)
        await dispatch({type: ADD_NOTE, payload: res.data})
        return 'Ok'
    }).catch(async err => {
        console.log(err.response.data)
    })
}
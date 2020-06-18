import { LOGOUT, LOGIN_START, LOGIN_FAIL, LOGIN_OK, REGISTER_START, REGISTER_FAIL, REGISTER_OK, SET_USER } from "../actions/types"

const initialState = {
    auth: false,
    token: null,
    authorizing: false,
    error: '',
    user: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START: return {...state, authorizing: true}
        case LOGIN_FAIL: return {...state, error: action.error, authorizing: false}
        case LOGIN_OK: return {...state, error: '', auth: true, authorizing: false, token: action.payload}
        case REGISTER_START: return {...state, authorizing: true}
        case REGISTER_FAIL: return {...state, authorizing: false, error: action.error}
        case REGISTER_OK: return {...state, authorizing: false, error: '', user: action.payload}
        case SET_USER: return {...state, user: action.payload}
        case LOGOUT: return { auth: false,
            token: null,
            authorizing: false,
            error: '',
            user: null}
        default: return state
    }
}

export default authReducer
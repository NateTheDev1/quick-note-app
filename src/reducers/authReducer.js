import { LOGIN_START, LOGIN_FAIL, LOGIN_OK } from "../actions/types"

const initialState = {
    auth: false,
    token: null,
    authorizing: false,
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START: return {...state, authorizing: true}
        case LOGIN_FAIL: return {...state, error: action.error}
        case LOGIN_OK: return {...state, error: '', auth: true, authorizing: false, token: action.payload}
        default: return state
    }
}

export default authReducer
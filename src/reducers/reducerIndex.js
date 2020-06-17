import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { LOADING } from '../actions/types'

const initialState = {
    loading: false
}

const globalReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING: return {...state, loading: action.payload}
        default: return {...state}
    }
}

const reducerIndex = combineReducers({authReducer, globalReducer})


export default reducerIndex
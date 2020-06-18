import {ADD_NOTE_START, ADD_NOTE } from "../actions/types"

const initialState = {
    adding: false
}

const noteReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NOTE_START: return {...state, adding: true}
        case ADD_NOTE: return {adding: false}
        default: return state
    }
}

export default noteReducer
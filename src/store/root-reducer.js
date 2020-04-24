import { SET_REPOS } from './action-types'

const initialState = {
    repos: [],
}

export const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
    
        case SET_REPOS:
            return { repos: action.payload }
    
        default:
            return state
    }
}

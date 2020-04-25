import { SET_REPOS, SET_EXPANDED, SET_STAR, SET_LANGUAGE_FILTER } from './action-types'
import { getUpdatedRepos } from '../utils/get-update-repos'
import { setLanguageFilter } from '../utils/set-language-filter'

const initialState = {
    repos: [],
}

export const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
    
        case SET_REPOS:
            return { repos: action.payload }

        case SET_STAR:
            return { repos: getUpdatedRepos(state.repos, action.payload, 'starred') }

        case SET_EXPANDED:
            return { repos: getUpdatedRepos(state.repos, action.payload, 'expanded') }

        case SET_LANGUAGE_FILTER:
            return { repos: setLanguageFilter(state.repos, action.payload) }
    
        default:
            return state
    }
}

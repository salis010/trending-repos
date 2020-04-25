import { SET_REPOS, SET_EXPANDED, SET_STAR, SET_LANGUAGE_FILTER, SET_STAR_FILTER } from './action-types'
import { getUpdatedRepos } from '../utils/get-updated-repos'

const initialState = {
    repos: [],
    filters: {
        starred: false,
        language: 'all',
    },
    starringChanged: 0,
}

export const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
    
        case SET_REPOS:
            return { ...state, repos: action.payload }

        case SET_STAR:
            return { ...state, repos: getUpdatedRepos(state.repos, action.payload, 'starred'), starringChanged: state.starringChanged + 1 }

        case SET_EXPANDED:
            return { ...state, repos: getUpdatedRepos(state.repos, action.payload, 'expanded') }

        case SET_LANGUAGE_FILTER:
            return { ...state, filters: { ...state.filters, language: action.payload } }

        case SET_STAR_FILTER:
            return { ...state, filters: { ...state.filters, starred: !state.filters.starred } }
    
        default:
            return state
    }
}

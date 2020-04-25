import { SET_REPOS, SET_STAR, SET_EXPANDED, SET_LANGUAGE_FILTER } from './action-types'

export const setRepos = repos => ({ type: SET_REPOS, payload: repos })
export const setStar = id => ({ type: SET_STAR, payload: id })
export const setExpanded = id => ({ type: SET_EXPANDED, payload: id })
export const setLanguageFilter = language => ({ type: SET_LANGUAGE_FILTER, payload: language })

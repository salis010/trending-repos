import { SET_REPOS } from './action-types'
import { SET_STAR } from './action-types'
import { SET_EXPANDED } from './action-types'

export const setRepos = repos => ({ type: SET_REPOS, payload: repos })
export const setStar = id => ({ type: SET_STAR, payload: id })
export const setExpanded = id => ({ type: SET_EXPANDED, payload: id })

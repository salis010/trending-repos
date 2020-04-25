import { getStarredRepos } from './get-starred-repos'

export const setLocalStorage = repos => {
    const starred = getStarredRepos(repos)

    localStorage.setItem('starred', starred)
}

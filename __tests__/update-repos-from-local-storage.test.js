import { updateReposFromLocalStorage } from '../src/utils/update-repos-from-local-storage'

describe('Test updateReposFromLocalStorage()', () => {

    const repos = [
        { id: 1, starred: false, stargazers_count: 60 },
        { id: 2, starred: false, stargazers_count: 70 },
        { id: 3, starred: false, stargazers_count: 80 },
        { id: 4, starred: false, stargazers_count: 90 },
    ]

    const strRepos = JSON.stringify(repos)

    const starred = [1, 3]

    it('returns an array', () => {
        expect(Array.isArray(updateReposFromLocalStorage(repos, starred))).toEqual(true)
    })


    it('does not modify the array supplied to it; the returning array should have a different reference', () => {
        expect(updateReposFromLocalStorage(repos, starred) === repos).toEqual(false)
        expect(JSON.stringify(repos)).toEqual(strRepos)
    })
    
    it(`it returns a new array with the elements whose id is present in starred to have their 
        starred property set to true and their stargazers_count incremented`, () => {

        const expectedArray = [
            { id: 1, starred: true, stargazers_count: 61 },
            { id: 2, starred: false, stargazers_count: 70 },
            { id: 3, starred: true, stargazers_count: 81 },
            { id: 4, starred: false, stargazers_count: 90 },
        ]

        const result = updateReposFromLocalStorage(repos, starred)

        expect(result).toEqual(expectedArray)
    })
    
})

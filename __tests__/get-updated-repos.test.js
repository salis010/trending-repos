import { getUpdatedRepos } from '../src/utils/get-updated-repos'

describe('Test getUpdatedRepos()', () => {

    const repos = [
        { id: 1, starred: true, expanded: true, stargazers_count: 0 },
        { id: 2, starred: true, expanded: true, stargazers_count: 0 },
        { id: 3, starred: false, expanded: true, stargazers_count: 0 },
        { id: 4, starred: true, expanded: true, stargazers_count: 0 },
        { id: 5, starred: false, expanded: true, stargazers_count: 0 },
        { id: 6, starred: false, expanded: true, stargazers_count: 0 },
    ]

    const strRepos = JSON.stringify(repos)

    it('returns an array', () => {
        expect(Array.isArray(getUpdatedRepos(repos, 1, 'expanded'))).toEqual(true)
    })


    it('does not modify the array supplied to it; the returning array should have a different reference', () => {
        expect(getUpdatedRepos(repos, 1, 'expanded') === repos).toEqual(false)
        expect(JSON.stringify(repos)).toEqual(strRepos)
    })
    
    it('returns an array with the property "expected" of the element with the macthing id set to the opposite value', () => {

        const expectedArray = [
            { id: 1, starred: true, expanded: false, stargazers_count: 0 },
            { id: 2, starred: true, expanded: true, stargazers_count: 0 },
            { id: 3, starred: false, expanded: true, stargazers_count: 0 },
            { id: 4, starred: true, expanded: true, stargazers_count: 0 },
            { id: 5, starred: false, expanded: true, stargazers_count: 0 },
            { id: 6, starred: false, expanded: true, stargazers_count: 0 },
        ]

        const result = getUpdatedRepos(repos, 1, 'expanded')

        expect(result).toEqual(expectedArray)

    })

    it('returns an array with the property "starred" of the element with the macthing id set to the opposite value', () => {

        const expectedArray = [
            { id: 1, starred: true, expanded: true, stargazers_count: 0 },
            { id: 2, starred: true , expanded: true, stargazers_count: 0 },
            { id: 3, starred: true , expanded: true, stargazers_count: 1 },
            { id: 4, starred: true , expanded: true, stargazers_count: 0 },
            { id: 5, starred: false , expanded: true, stargazers_count: 0 },
            { id: 6, starred: false , expanded: true, stargazers_count: 0 },
        ]

        const result = getUpdatedRepos(repos, 3, 'starred')
        expect(result).toEqual(expectedArray)

    })
    
})

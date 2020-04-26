import { trimRepos } from '../src/utils/trim-repos'

describe('Test trimRepos()', () => {

    const repos = [
        { id: 1, notRequired: true, stargazers_count: 0 },
        { id: 2, notRequired: true, stargazers_count: 0 },
    ]

    const fields = ['id', 'stargazers_count']

    const strRepos = JSON.stringify(repos)

    it('returns an array', () => {
        expect(Array.isArray(trimRepos(repos, fields))).toEqual(true)
    })


    it('does not modify the array supplied to it; the returning array should have a different reference', () => {
        expect(trimRepos(repos, fields) === repos).toEqual(false)
        expect(JSON.stringify(repos)).toEqual(strRepos)
    })
    
    it('returns an array with objects that have the properties passed in the fields parameter as well as rank, starred, expanded, and languages', () => {

        const expectedArray = [
            { id: 1, starred: false, expanded: false, stargazers_count: 0, rank: 1, languages: ['C++', 'C#'] },
            { id: 2, starred: false, expanded: false, stargazers_count: 0, rank: 2, languages: ['C++', 'C#'] },
        ]

        const result = trimRepos(repos, fields)

        expect(result[0]).toHaveProperty('starred')
        expect(result[0]).toHaveProperty('expanded')
        expect(result[0]).toHaveProperty('stargazers_count')
        expect(result[0]).toHaveProperty('rank')
        expect(result[0]).toHaveProperty('languages')
        expect(result[0].length).toEqual(expectedArray[0].length)
    })
    
})

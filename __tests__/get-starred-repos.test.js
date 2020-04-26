import { getStarredRepos } from '../src/utils/get-starred-repos'

describe('Test getStarredRepos()', () => {

    const repos = [
        { id: 1, starred: true },
        { id: 2, starred: true },
        { id: 3, starred: false },
        { id: 4, starred: true },
        { id: 5, starred: false },
        { id: 6, starred: false },
    ]

    const expectedArray = [1, 2, 4]

    it('returns an array with only elements whose starred property is true', () => {
        expect(getStarredRepos(repos)).toEqual(expectedArray)
    })

})

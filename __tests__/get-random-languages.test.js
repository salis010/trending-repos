import { getRandomLanguages } from '../src/utils/get-random-languages'

describe('Test getRandomLanguages', () => {

    const arr = getRandomLanguages()

    it('Returns an array', () => {
        expect(Array.isArray(arr)).toEqual(true)
    })

    it('Returns an array of any length between 1 and 3', () => {
        expect(arr.length >= 1 && arr.length <= 3).toEqual(true)
    })

})
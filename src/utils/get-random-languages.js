import { popularLanguages } from '../constants'
import { getRandomNumber } from './get-random-number'

export const getRandomLanguages = () => {
    const languages = []
    let language

    for(let i = 0; i < 3; i++) {
        language = popularLanguages[getRandomNumber(popularLanguages.length)]
       
        if(!languages.includes(language))
            languages.push(language)
    }

    return languages
}

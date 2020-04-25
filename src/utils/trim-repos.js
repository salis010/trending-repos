import { getRandomLanguages } from './get-random-languages'

export const trimRepos = (repos, fields) => 
    repos.map((repo, i) => {
        const updatedRepo = {}

        fields.forEach(field => updatedRepo[field] = repo[field] )
        updatedRepo.rank = i + 1
        updatedRepo.starred = false
        updatedRepo.filtered = true
        updatedRepo.expanded = false
        updatedRepo.languages = getRandomLanguages()

        return updatedRepo
    })

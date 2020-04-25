export const setLanguageFilter = (repos, language) => {
    
    if(language == 'all') {
        return repos.map(repo => {
            repo.filtered = true
            return repo
        })
    }

    return repos.map(repo => {
        repo.languages.includes(language) ? repo.filtered = true : repo.filtered = false
        return repo
    })

}

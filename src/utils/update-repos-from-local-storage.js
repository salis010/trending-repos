export const updateReposFromLocalStorage = (repos, starred) => {

    const updatedRepos = JSON.parse(JSON.stringify(repos))

    updatedRepos.forEach(repo => {
        
        if(starred.includes(repo.id)) {
            repo.starred = true
            repo.stargazers_count++
        }
        
    })

    return updatedRepos
}

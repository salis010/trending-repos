export const updateReposFromLocalStorage = repos => {

    const starred = localStorage.getItem('starred').split(',').map(id => +id)

    const updatedRepos = repos.concat()

    updatedRepos.forEach(repo => {
        
        if(starred.includes(repo.id)) {
            repo.starred = true
            repo.stargazers_count++
        }
        
    })

    return updatedRepos
}

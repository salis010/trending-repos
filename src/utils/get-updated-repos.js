export const getUpdatedRepos = (repos, id, field) => {

    const arr = repos.concat()

    arr.forEach(repo => {
        if(repo.id == id) {
            repo[field] = !repo[field]

            if(field === 'starred') {
                if(repo[field]) {
                    repo.stargazers_count++
                } else {
                    repo.stargazers_count--
                }
            }
        }
    })

    return arr
}

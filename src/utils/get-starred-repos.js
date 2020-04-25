export const getStarredRepos = repos => {

    const starred = []

    repos.forEach(repo => {
        if(repo.starred) {
            starred.push(repo.id)
        }
    })

    return starred
}
export const pruneRepos = (repos, fields) => {
    return repos.map((repo, i) => {
        const obj = {}

        fields.forEach(field => obj[field] = repo[field] )
        obj.rank = i
        obj.starred = false

        return obj
    })
}

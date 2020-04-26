export const getUpdatedRepos = (repos, id, field) => {
    const arr = JSON.parse(JSON.stringify(repos))

    for(let i in arr) {
        if(arr[i].id == id) {
            arr[i][field] = !arr[i][field]

            if(field == 'starred') {
                if(arr[i][field]) {
                    arr[i].stargazers_count++
                } else {
                    arr[i].stargazers_count--
                }
            }
        }
    }

    return arr
}

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Repo } from './repo/repo'

const ReposWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Repos = ({ repos, filters }) =>
    <ReposWrapper>
        {repos
            .filter(repo => 
                (filters.starred ? repo.starred === filters.starred : true) && (filters.language == 'all' ? true : repo.languages.includes(filters.language)))
            .map(repo =>
                <Repo 
                    key={repo.id} 
                    id={repo.id}
                    rank={repo.rank}
                    name={repo.name}
                    starred={repo.starred}
                    expanded={repo.expanded}
                    description={repo.description}
                    forks_count={repo.forks_count}
                    html_url={repo.html_url}
                    languages={repo.languages}
                    stargazers_count={repo.stargazers_count}
                />
            )
        }
    </ReposWrapper>

Repos.propTypes = { 
    filters: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
}

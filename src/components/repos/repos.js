import React from 'react'
import styled from 'styled-components'
import { Repo } from './repo/repo'

const ReposWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Repos = ({ repos }) => 
    <ReposWrapper>
        {repos
            .filter(repo => repo.filtered)
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

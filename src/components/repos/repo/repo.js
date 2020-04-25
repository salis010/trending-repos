import React from 'react'
import styled from 'styled-components'
import { RepoHeader } from './repo-header'
import { MoreInfo } from './more-info'
import { P } from '../../common'

const RepoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    padding: 0 ${props => props.theme.margin};
    border: 1px solid grey;
    border-radius: 1rem;
`

export const Repo = ({ id, rank, name, starred, expanded, description, forks_count, html_url, languages, stargazers_count }) =>    
    <RepoWrapper>
        <RepoHeader id={id} rank={rank} name={name} starred={starred} expanded={expanded} />
        <P>{description}</P>
        {expanded && 
            <MoreInfo 
                stargazers_count={stargazers_count}
                description={description}
                forks_count={forks_count}
                html_url={html_url}
                languages={languages} 
            />
        }
    </RepoWrapper>

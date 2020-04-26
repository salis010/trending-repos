import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RepoHeader } from './repo-header'
import { MoreInfo } from './more-info'
import { P } from '../../common'

const RepoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.theme.margin};
    padding: 0 ${props => props.theme.marginMobile};
    border: 3px solid ${props => props.theme.colors.borderColor};
    border-radius: 0.5rem;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        margin-bottom: 2rem;
        padding: 0 ${props => props.theme.margin};
    }
`

const DescriptionWrapper = styled.div`
    margin: ${props => props.theme.marginMobile} 0;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        margin: ${props => props.theme.margin} 0;
    }
`

export const Repo = ({ id, rank, name, starred, expanded, description, forks_count, html_url, languages, stargazers_count }) =>    
    <RepoWrapper>
        <RepoHeader id={id} rank={rank} name={name} starred={starred} expanded={expanded} />
        <DescriptionWrapper>
            <P>{description}</P>
        </DescriptionWrapper>
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


Repo.propTypes = { 
    description: PropTypes.string,
    expanded: PropTypes.bool.isRequired,
    forks_count: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    languages: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    starred: PropTypes.bool.isRequired,
}

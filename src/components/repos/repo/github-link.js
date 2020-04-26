import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const GithubLinkWrapper = styled.div`
    display: flex;
    justify-contents: center;
    align-items: center;    
    height: 1.8rem;
`

export const A = styled.a`
    flex: 0 auto;
    font-size: 1rem;
    font-weight: 800;
    margin: 0;
    padding: 0.3rem 1rem;
    color: white;
    background-color: ${props => props.theme.colors.githubBlack};
    border-radius: 3rem;
    
    text-decoration: none;

    &:visited {
        text-decoration: none;
    }

    &:hover {
        text-decoration: none;
    }

    &:active {
        text-decoration: none;
    }
`

export const GithubLink = ({ url }) =>
    <GithubLinkWrapper>
        <A href={url} target='_blank' >GitHub</A>
    </GithubLinkWrapper>

GithubLink.propTypes = {
    url: PropTypes.string.isRequired,
}

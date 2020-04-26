import React from 'react'
import styled from 'styled-components'
import { P } from '../../common'
import { GithubLink } from './github-link'


const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr;
    align-items: center;
    margin-bottom: ${props => props.theme.margin};
`

const LabelP = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.colors.labelColor};
`

export const MoreInfo = ({ stargazers_count, forks_count, html_url, languages }) =>
    <InfoGrid>
        <LabelP>Stars:</LabelP>
        <P>{stargazers_count}</P>
        <LabelP>Forks:</LabelP>
        <P>{forks_count}</P>
        <LabelP>Link:</LabelP>
        <GithubLink url={html_url} />
        <LabelP>Languages:</LabelP>
        <P>{languages.join(', ')}</P>
    </InfoGrid>

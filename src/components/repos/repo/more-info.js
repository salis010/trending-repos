import React from 'react'
import styled from 'styled-components'
import { P } from '../../common'


const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr;
    margin-bottom: ${props => props.theme.margin};
`

const LabelP = styled.p`
    font-size: 1.2rem;
    margin: 0.3rem;
    color: RGB(100, 100, 150);
`

export const A = styled.a`
    color: ${props => props.theme.colors.primary};
    
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

export const MoreInfo = ({ stargazers_count, forks_count, html_url, languages }) =>
    <InfoGrid>
        <LabelP>Stars:</LabelP>
        <P>{stargazers_count}</P>
        <LabelP>Forks:</LabelP>
        <P>{forks_count}</P>
        <LabelP>Link:</LabelP>
        <P>
            <A href={html_url} target='_blank'>{html_url}</A>
        </P>
        <LabelP>Languages:</LabelP>
        <P>{languages.join(', ')}</P>
    </InfoGrid>

import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    display:flex;
    align-items: center;
    height: 5rem;
    background-color: ${props => props.theme.colors.primary};
`

const H1 = styled.h1`
    font-size: 1.6rem;
    color: white;
    margin-left:  ${props => props.theme.margin};

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        font-size: 2.4rem;
    }
`

export const Header = ({ title }) => 
    <HeaderWrapper>
        <H1>{title}</H1>
    </HeaderWrapper>

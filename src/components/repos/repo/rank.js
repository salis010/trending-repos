import React from 'react'
import styled from 'styled-components'

const RankWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    margin: ${props => props.theme.margin} 0;
    background-color: grey;
    border-radius: ${props => props.theme.borderRadius};
`

const Number = styled.p`
    font-size: 1.4rem;
    fotn-weight: 800;
    color: white
`

export const Rank = ({ rank }) =>
    <RankWrapper>
        <Number>{rank}</Number>
    </RankWrapper>

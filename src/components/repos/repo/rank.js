import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RankWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.6rem;
    height: 1.6rem;
    margin: ${props => props.theme.marginMobile} 0;
    background-color: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius};

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        width: 2rem;
        height: 2rem;
        margin: ${props => props.theme.margin} 0;
    }
`

const Number = styled.p`
    font-size: 1rem;
    fotn-weight: 800;
    color: white;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        font-size: 1.4rem;
    }
`

export const Rank = ({ rank }) =>
    <RankWrapper>
        <Number>{rank}</Number>
    </RankWrapper>

Rank.propTypes = {
    rank: PropTypes.number.isRequired,
}

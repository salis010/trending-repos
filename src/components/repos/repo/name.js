import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const H2 = styled.h2`
    font-size: 1rem;
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis; 
    margin: 0 0.5rem;
    color: ${props => props.theme.colors.h2Color};

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        font-size: 1.4rem;
        margin: 0 2rem;
    }
`

export const Name = ({ name }) =>
        <H2>{name}</H2>

Name.propTypes = {
    name: PropTypes.string.isRequired,
}

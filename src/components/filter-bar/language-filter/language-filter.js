import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { popularLanguages } from '../../../constants'


const Select = styled.select`
    font-size: ${props => props.theme.textSize};
    margin: ${props => props.theme.margin};
    margin-top: 0;
    color: ${props => props.theme.colors.text};
    background-color: white;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        margin: ${props => props.theme.margin};
    }
`

export const LanguageFilter = ({ setLanguageFilter }) => {
    
    const handleChange = event => setLanguageFilter(event.target.value)
    
    return (
        <Select defaultValue={''} onChange={handleChange}>
            <option value='all'>All languages</option>
            {popularLanguages.map(language => 
                <option key={language} value={language}>{language}</option>
            )}
        </Select>
    )
}

LanguageFilter.propTypes = {
    setLanguageFilter: PropTypes.func.isRequired,
}

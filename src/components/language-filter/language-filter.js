import React from 'react'
import styled from 'styled-components'
import { popularLanguages } from '../../constants'

const LanguageFilterWrapper = styled.div`
    display: flex;
`

const Select = styled.select`

`

export const LanguageFilter = ({ setLanguageFilter }) => {
    
    const handleChange = event => setLanguageFilter(event.target.value)
    
    return (
        <LanguageFilterWrapper>
            <Select defaultValue={''} onChange={handleChange}>
                <option value='all'>Filter by language</option>
                {popularLanguages.map(language => 
                    <option key={language} value={language}>{language}</option>
                )}
            </Select>
        </LanguageFilterWrapper>
    )
}

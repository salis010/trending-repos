import React from 'react'
import styled from 'styled-components'
import { LanguageFilter } from './language-filter/index'
import { StarFilter } from './star-filter/index'

const FilterBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FilterBar = () => 
    <FilterBarWrapper>
        <LanguageFilter />
        <StarFilter />
    </FilterBarWrapper>
    
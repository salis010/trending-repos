import React from 'react'
import styled from 'styled-components'
import { LanguageFilter } from './language-filter/index'
import { StarFilter } from './star-filter/index'

const FilterBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.theme.margin};
    background-color: ${props => props.theme.colors.filterBarColor};

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        flex-direction: row;
        justify-content: space-between;    
    }
`

const LanguageFitlerWrapper = styled.div`
    display: flex;
    order: 1;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        order: 0;
    }
`

const StarFitlerWrapper = styled.div`
    display: flex;
    order: 0;
    margin-right: ${props => props.theme.margin};

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        order: 1;
    }
`

export const FilterBar = () => 
    <FilterBarWrapper>
        <LanguageFitlerWrapper>
            <LanguageFilter />
        </LanguageFitlerWrapper>
        <StarFitlerWrapper>
            <StarFilter />
        </StarFitlerWrapper>
    </FilterBarWrapper>
    
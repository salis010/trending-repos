import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Img } from '../../common'
import starHollow from '../../../images/star-hollow.png'
import starFilled from '../../../images/star-filled.png'

const StarFilterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: ${props => props.theme.margin};
`

const Label = styled.p`
    font-size: ${props => props.theme.textSize};
    margin-top: 0.5rem 0;
    color: ${props => props.theme.colors.text};
    background-color: #e8f38b;
`

export const StarFilter = ({ starred, setStarFilter }) => {
    
    return (
        <StarFilterWrapper>
            <Label>Show starred only:</Label>
            <Img 
                onClick={setStarFilter}
                src={starred ?  starFilled : starHollow} 
                alt='Show Starred' 
            />
        </StarFilterWrapper>
    )
}

StarFilter.propTypes = { 
    setStarFilter: PropTypes.func.isRequired,
    starred: PropTypes.bool.isRequired,
}

import React from 'react'
import styled from 'styled-components'
import { Img } from '../common'
import starHollow from '../../images/star-hollow.png'
import starFilled from '../../images/star-filled.png'

const StarFilterWrapper = styled.div`
    display: flex;
`

const Select = styled.select`

`

export const StarFilter = ({ starred, setStarFilter }) => {
    
    
    return (
        <StarFilterWrapper>
            <label>Show starred only:</label>
            <Img 
                onClick={setStarFilter}
                src={starred ?  starFilled : starHollow} 
                alt='Show Starred' 
            />
        </StarFilterWrapper>
    )
}

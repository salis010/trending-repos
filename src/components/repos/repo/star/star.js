import React from 'react'
import { Img } from '../../../common'
import starHollow from '../../../../images/star-hollow.png'
import starFilled from '../../../../images/star-filled.png'

export const Star = ({ id, starred, setStar }) => 
    <Img 
        onClick={() => setStar(id)}
        src={starred ?  starFilled : starHollow} 
        alt='More info' 
    />

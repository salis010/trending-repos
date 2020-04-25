import React from 'react'
import { Img } from '../../../common'
import chevronDown from '../../../../images/chevron-down.png'
import chevronUp from '../../../../images/chevron-up.png'

export const MoreInfoButton = ({ id, expanded, setExpanded }) =>
    <Img 
        onClick={() => setExpanded(id)}
        src={expanded ?  chevronUp : chevronDown} 
        alt='More info'         
    />

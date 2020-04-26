import React from 'react'
import PropTypes from 'prop-types'
import { Img } from '../../../common'
import starHollow from '../../../../images/star-hollow.png'
import starFilled from '../../../../images/star-filled.png'

export const Star = ({ id, starred, setStar }) => 
    <Img 
        onClick={() => setStar(id)}
        src={starred ?  starFilled : starHollow} 
        alt='More info' 
    />

Star.propTypes = {
    id: PropTypes.number.isRequired, 
    setStar: PropTypes.func.isRequired, 
    starred: PropTypes.bool.isRequired, 
}

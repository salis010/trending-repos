import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
    font-size: 1.4rem;
    font-weight: 800;
    margin: 0 2rem;
    color: gray;
`

export const Name = ({ name }) =>
    <Text>{name}</Text>

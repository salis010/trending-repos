import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
	font-style: 3rem;
	color: ${props => props.theme.colors.primary};
`

export const App = () =>
	<H1>Trending Repos</H1>

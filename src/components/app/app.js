import React, { useEffect } from 'react'
import styled from 'styled-components'
import { githubApiUrl, repoFields } from '../../constants'
import { trimRepos } from '../../utils/trim-repos'
import { Repos } from '../repos/index'

const H1 = styled.h1`
	font-style: 3rem;
	color: ${props => props.theme.colors.primary};
`

export const App = ({ setRepos }) => {
	
	useEffect(() => {
		fetch(githubApiUrl)
			.then(response => response.json())
			.then(data => trimRepos(data.items, repoFields))
			.then(data => setRepos(data))
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			<H1>Trending Repos</H1>
			<Repos />
		</>
	)
}

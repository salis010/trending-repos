import React, { useEffect } from 'react'
import styled from 'styled-components'
import { pruneRepos } from '../../utils/prune-repos'
import { Repos } from '../repos/index'

const H1 = styled.h1`
	font-style: 3rem;
	color: ${props => props.theme.colors.primary};
`

export const App = ({ setRepos }) => {

	const url = 'https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc'
	const fields = ['id', 'name', 'description', 'forks_count', 'html_url', 'languages_url', 'stargazers_count']
	
	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => pruneRepos(data.items, fields))
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

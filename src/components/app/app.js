import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { githubApiUrl, repoFields } from '../../constants'
import { trimRepos } from '../../utils/trim-repos'
import { Header } from '../header'
import { FilterBar } from '../filter-bar/index'
import { Repos } from '../repos/index'
import { updateReposFromLocalStorage } from '../../utils/update-repos-from-local-storage'
import { getStarredRepos } from '../../utils/get-starred-repos'


const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0  ${props => props.theme.margin}; 
`

export const App = ({ repos, starringChanged, setRepos }) => {
	
	useEffect(() => {
		fetch(githubApiUrl)
			.then(response => response.json())
			.then(data => {
				const trimmedRepos = trimRepos(data.items, repoFields)
				
				const starredStorage = localStorage.getItem('starred')

				if(starredStorage) {
					const starred = starredStorage.split(',').map(id => +id)
					const updatedRepos = updateReposFromLocalStorage(trimmedRepos, starred)
					setRepos(updatedRepos)
				} else {
					setRepos(trimmedRepos)
				}
				
			})
			.catch(err => console.log(err))
	}, [])

	useEffect(() => {
		if(repos.length) {
			const starred = getStarredRepos(repos)
			
			localStorage.setItem('starred', starred)
		}				
	}, [starringChanged])

	return (
		<>
			<Header title='GitHub Trending Repos' />
			<FilterBar />
			<PageWrapper>
				<Repos />
			</PageWrapper>
		</>
	)
}

App.propTypes = {
	repos: PropTypes.array.isRequired,
	starringChanged: PropTypes.number.isRequired,
	setRepos: PropTypes.func.isRequired,
}

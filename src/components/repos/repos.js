import React from 'react'

export const Repos = ({ repos }) => 
    <ul>
        {repos.map(repo => <li key={repo.id}>{repo.name}</li>)}
    </ul>

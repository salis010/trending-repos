import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Rank } from './rank'
import { Name } from './name'
import { Star } from './star/index'
import { MoreInfoButton } from './more-info-button/index'

const RepoHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Container = styled.div`
    display: flex;    
    align-items: center;
    max-width: 70%;
`

export const RepoHeader = ({ id, rank, name, starred, expanded }) => 
    <RepoHeaderWrapper>
        <Container>
            <Rank rank={rank} />
            <Name name={name} />
        </Container>
        <Container>
            <Star id={id} starred={starred} />
            <MoreInfoButton id={id} expanded={expanded} />
        </Container>
    </RepoHeaderWrapper>


RepoHeader.propTypes = { 
    expanded: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    starred: PropTypes.bool.isRequired,
}

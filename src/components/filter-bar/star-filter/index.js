import { connect } from 'react-redux'
import { StarFilter as Component } from './star-filter'
import { setStarFilter } from '../../../store/actions'

const mapStateToProps = state => ({
    starred: state.filters.starred,
})

const mapDispatchToProps = dispatch => ({
    setStarFilter: () => dispatch(setStarFilter())
})

export const StarFilter = connect(mapStateToProps, mapDispatchToProps)(Component)

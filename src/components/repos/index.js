import { connect } from 'react-redux'
import { Repos as Component} from './repos'

const mapStateToProps = state => (
    {
        repos: state.repos,
        filters: state.filters,
    }
)

export const Repos = connect(mapStateToProps)(Component)

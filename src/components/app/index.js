import { connect } from 'react-redux'
import { setRepos } from '../../store/actions'
import { App as Component } from './app'

const mapStateToProps = state => ({
    repos: state.repos,
    starringChanged: state.starringChanged,
})

const mapDispatchToProps = dispatch => (
    {
        setRepos: repos => dispatch(setRepos(repos)),
    }
)

export const App = connect(mapStateToProps, mapDispatchToProps)(Component)

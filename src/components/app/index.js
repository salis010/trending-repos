import { connect } from 'react-redux'
import { setRepos } from '../../store/actions'
import { App as Component } from './app'

const mapDispatchToProps = dispatch => (
    {
        setRepos: repos => dispatch(setRepos(repos)),
    }
)

export const App = connect(null, mapDispatchToProps)(Component)

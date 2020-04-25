import { connect } from 'react-redux'
import { LanguageFilter as Component } from './language-filter'
import { setLanguageFilter } from '../../store/actions'

const mapDispatchToProps = dispatch => ({
    setLanguageFilter: language => dispatch(setLanguageFilter(language))
})

export const LanguageFilter = connect(null, mapDispatchToProps)(Component)

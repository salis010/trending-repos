import { connect } from 'react-redux'
import { MoreInfoButton as Component } from './more-info-button'
import { setExpanded } from '../../../../store/actions'

const mapDispatchToProps = dispatch => ({
    setExpanded: id => dispatch(setExpanded(id))
})

export const MoreInfoButton = connect(null, mapDispatchToProps)(Component)

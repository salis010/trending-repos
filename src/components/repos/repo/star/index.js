import { connect } from 'react-redux'
import { Star as Component } from './star'
import { setStar } from '../../../../store/actions'

const mapDispatchToProps = dispatch => ({
    setStar: id => dispatch(setStar(id))
})

export const Star = connect(null, mapDispatchToProps)(Component)

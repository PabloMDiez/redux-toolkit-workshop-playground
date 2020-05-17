import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getCurrentUserName } from '../../store/user'

import Welcome from './welcome'

const mapStateToProps = createStructuredSelector({
  userName: getCurrentUserName,
})

export default connect(mapStateToProps)(Welcome)

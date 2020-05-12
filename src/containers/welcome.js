import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Welcome from '../components/welcome'
import { getCurrentUserName } from '../store/user'

const mapStateToProps = createStructuredSelector({
  userName: getCurrentUserName,
})

export default connect(mapStateToProps)(Welcome)

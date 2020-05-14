import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Welcome from '../components/welcome'

const mapStateToProps = createStructuredSelector({
  userName: () => '?',
})

export default connect(mapStateToProps)(Welcome)

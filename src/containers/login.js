import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Login from '../components/login'

const mapStateToProps = createStructuredSelector({
  isLoggingIn: () => false,
  loginError: () => false,
})

const mapDispatchToProps = {
  login: () => ({ type: 'NOT_IMPLEMENTED' }),
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

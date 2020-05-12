import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Login from '../components/login'
import { hasLoginError, isLoggingIn, login } from '../store/user'

const mapStateToProps = createStructuredSelector({
  isLoggingIn,
  loginError: hasLoginError,
})

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

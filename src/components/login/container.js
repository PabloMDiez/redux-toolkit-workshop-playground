import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { hasLoginError, isLoggingIn, login } from '../../store/user'

import Login from './login'

const mapStateToProps = createStructuredSelector({
  isLoggingIn,
  loginError: hasLoginError,
})

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

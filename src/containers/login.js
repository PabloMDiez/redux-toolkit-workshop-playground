import Login from '../components/login'
import { connect } from 'react-redux'
import { hasLoginError, isLoggingIn, login } from '../store/user'

const mapStateToProps = state => ({
  isLoggingIn: isLoggingIn(state),
  loginError: hasLoginError(state),
})

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

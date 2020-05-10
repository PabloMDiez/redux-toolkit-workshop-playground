import Welcome from '../components/welcome'
import { getCurrentUserName } from '../store/user'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  userName: getCurrentUserName(state)
})

export default connect(mapStateToProps)(Welcome)

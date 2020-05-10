import { connect } from 'react-redux'

import Content from '../components/content'
import { getDarkMode } from '../store/ui'
import { isLoggedIn } from '../store/user'

const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(state),
  darkMode: getDarkMode(state),
})

export default connect(mapStateToProps)(Content)

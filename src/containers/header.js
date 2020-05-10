import { connect } from 'react-redux'

import Header from '../components/header'
import { getDarkMode, toggleDarkMode } from '../store/ui'
import { isLoggedIn, logout } from '../store/user'

const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(state),
  darkMode: getDarkMode(state),
})

const mapDispatchToProps = {
  logout,
  toggleDarkMode,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

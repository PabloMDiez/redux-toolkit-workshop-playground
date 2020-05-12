import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from '../components/header'
import { getDarkMode, toggleDarkMode } from '../store/ui'
import { isLoggedIn, logout } from '../store/user'

const mapStateToProps = createStructuredSelector({
  isLoggedIn,
  darkMode: getDarkMode,
})

const mapDispatchToProps = {
  logout,
  toggleDarkMode,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

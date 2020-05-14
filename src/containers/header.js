import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from '../components/header'

const mapStateToProps = createStructuredSelector({
  isLoggedIn: () => false,
  darkMode: () => false,
})

const mapDispatchToProps = {
  logout: () => ({ type: 'NOT_IMPLEMENTED' }),
  toggleDarkMode: () => ({ type: 'NOT_IMPLEMENTED' }),
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

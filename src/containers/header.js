import { connect } from 'react-redux'

import Header from '../components/header'
import { getDarkMode, toggleDarkMode } from '../store/ui'

const mapStateToProps = state => ({
  darkMode: getDarkMode(state),
})

const mapDispatchToProps = {
  toggleDarkMode,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

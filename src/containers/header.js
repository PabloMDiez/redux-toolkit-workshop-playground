import { connect } from 'react-redux'

import Header from '../components/header'
import { getDarkMode } from '../store/ui'

const mapStateToProps = state => ({
  darkMode: getDarkMode(state),
})

export default connect(mapStateToProps)(Header)

import { connect } from 'react-redux'

import Sidebar from '../components/sidebar'
import { getDarkMode } from '../store/ui'

const mapStateToProps = state => ({
  darkMode: getDarkMode(state),
})

export default connect(mapStateToProps)(Sidebar)

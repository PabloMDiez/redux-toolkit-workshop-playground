import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Sidebar from '../components/sidebar'
import { getDarkMode } from '../store/ui'

const mapStateToProps = createStructuredSelector({
  darkMode: getDarkMode,
})

export default connect(mapStateToProps)(Sidebar)

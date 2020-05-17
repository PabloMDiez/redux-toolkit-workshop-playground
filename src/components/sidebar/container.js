import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getDarkMode } from '../../store/ui'

import Sidebar from './sidebar'

const mapStateToProps = createStructuredSelector({
  darkMode: getDarkMode,
})

export default connect(mapStateToProps)(Sidebar)

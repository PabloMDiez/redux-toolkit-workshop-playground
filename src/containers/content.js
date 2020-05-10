import { connect } from 'react-redux'

import Content from '../components/content'
import { getDarkMode } from '../store/ui'

const mapStateToProps = state => ({
  darkMode: getDarkMode(state),
})

export default connect(mapStateToProps)(Content)

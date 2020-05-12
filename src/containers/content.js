import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Content from '../components/content'
import { getDarkMode } from '../store/ui'
import { isLoggedIn } from '../store/user'

const mapStateToProps = createStructuredSelector({
  isLoggedIn,
  darkMode: getDarkMode,
})

export default connect(mapStateToProps)(Content)

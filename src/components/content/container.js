import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getDarkMode } from '../../store/ui'
import { isLoggedIn } from '../../store/user'

import Content from './content'

const mapStateToProps = createStructuredSelector({
  isLoggedIn,
  darkMode: getDarkMode,
})

export default connect(mapStateToProps)(Content)

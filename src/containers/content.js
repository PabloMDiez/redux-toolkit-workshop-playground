import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Content from '../components/content'

const mapStateToProps = createStructuredSelector({
  isLoggedIn: () => false,
  darkMode: () => false,
})

export default connect(mapStateToProps)(Content)

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Sidebar from '../components/sidebar'

const mapStateToProps = createStructuredSelector({
  darkMode: () => false,
})

export default connect(mapStateToProps)(Sidebar)

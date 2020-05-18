import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Grid from '../../components/layout/grid'
import { getDarkMode } from '../../store/ui'

const mapStateToProps = createStructuredSelector({
  darkMode: getDarkMode,
})

export default connect(mapStateToProps)(Grid)

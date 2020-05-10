import { connect } from 'react-redux'

import Grid from '../../components/layout/grid'
import { getDarkMode } from '../../store/ui'

const mapStateToProps = state => ({
  darkMode: getDarkMode(state),
})

export default connect(mapStateToProps)(Grid)

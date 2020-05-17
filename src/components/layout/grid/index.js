import { connect } from 'react-redux'

import { getDarkMode } from '../../../store/ui'

import Grid from './grid'

const mapStateToProps = state => ({
  darkMode: getDarkMode(state),
})

export default connect(mapStateToProps)(Grid)

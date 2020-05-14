import { connect } from 'react-redux'

import Grid from '../../components/layout/grid'

const mapStateToProps = state => ({
  darkMode: false,
})

export default connect(mapStateToProps)(Grid)

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import Header from './containers/header'
import Sidebar from './containers/sidebar'
import Content from './containers/content'
import Grid from './containers/layout/grid'

import initializeStore from './store'

const store = initializeStore()
const App = ({ apiBaseUrl }) => {
  return (
    <Provider store={store}>
      <Grid>
        <Header />
        <Sidebar />
        <Content />
      </Grid>
    </Provider>
  )
}

App.propTypes = {
  apiBaseUrl: PropTypes.string,
}

export default App

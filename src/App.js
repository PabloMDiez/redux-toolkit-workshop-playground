import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import Header from './containers/header'
import Sidebar from './containers/sidebar'
import Content from './containers/content'
import Grid from './containers/layout/grid'
import API from './lib/api'

import initializeStore from './store'

const App = ({ apiBaseUrl }) => {
  const api = new API(apiBaseUrl)
  const store = initializeStore(api)
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

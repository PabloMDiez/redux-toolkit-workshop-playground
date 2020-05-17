import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import Header from './components/header'
import Sidebar from './components/sidebar'
import Content from './components/content'
import Grid from './components/layout/grid'
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

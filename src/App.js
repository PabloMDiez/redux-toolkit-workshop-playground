import React from 'react';
import { Provider } from 'react-redux'

import Header from './containers/header'
import Sidebar from './containers/sidebar'
import Content from './containers/content'
import Grid from './containers/layout/grid'

import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Grid>
        <Header/>
        <Sidebar/>
        <Content/>
      </Grid>
    </Provider>
  )
}

export default App;

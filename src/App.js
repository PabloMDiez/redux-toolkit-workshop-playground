import React from 'react';
import Content from './components/content'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Grid from './components/layout/grid'

const App = () => {
  const darkMode = false
  return (
    <Grid darkMode={darkMode} >
      <Header darkMode={darkMode} />
      <Sidebar darkMode={darkMode} />
      <Content darkMode={darkMode} />
    </Grid>
  )
}

export default App;

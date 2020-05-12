import React from 'react'
import PropTypes from 'prop-types'

import Welcome from '../containers/welcome'
import Login from '../containers/login'
import Block from './layout/block'

const Content = ({ isLoggedIn, darkMode }) => {
  return (
    <Block darkMode={darkMode} gridArea='content'>
      {isLoggedIn ? <Welcome /> : <Login />}
    </Block>
  )
}

Content.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
}

export default Content

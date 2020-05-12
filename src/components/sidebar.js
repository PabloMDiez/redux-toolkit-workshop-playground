import React from 'react'
import PropTypes from 'prop-types'

import Block from './layout/block'

const Sidebar = ({ darkMode }) => {
  return (
    <Block darkMode={darkMode} gridArea='sidebar'>
      Sidebar here
    </Block>
  )
}

Sidebar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
}

export default Sidebar

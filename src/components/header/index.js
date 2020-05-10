import React from 'react'
import PropTypes from 'prop-types'
import Block from '../layout/block'

const Header = ({ darkMode }) => {
  return (
    <Block
      darkMode={darkMode}
      gridArea='header'
    >
      Header here
    </Block>
  )
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
}

export default Header

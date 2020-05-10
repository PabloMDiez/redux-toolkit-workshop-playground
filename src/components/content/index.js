import React from 'react'
import PropTypes from 'prop-types'
import Block from '../layout/block'

const Content = ({ darkMode }) => {
  return (
    <Block
      darkMode={darkMode}
      gridArea='content'
    >
      Content here
    </Block>
  )
}

Content.propTypes = {
  darkMode: PropTypes.bool.isRequired,
}

export default Content

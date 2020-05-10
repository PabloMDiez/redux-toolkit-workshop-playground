import React from 'react'
import PropTypes from 'prop-types'

const Welcome = ({ userName }) => {
  return <span>Hi {userName}</span>
}

Welcome.propTypes = {
  userName: PropTypes.string.isRequired,
}

export default Welcome

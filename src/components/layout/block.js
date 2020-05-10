import styled from 'styled-components'
import PropTypes from 'prop-types'

const Block = styled.div`
  background-color: ${props => props.darkMode ? 'black' : 'white'};
  color: ${props => props.darkMode ? '#F5F5F5' : '#202020'};
  padding: 16px;
  grid-area: ${props => props.gridArea};
`

Block.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  gridArea: PropTypes.oneOf(['header', 'sidebar', 'content']).isRequired,
}

export default Block

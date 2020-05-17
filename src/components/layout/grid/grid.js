import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas:
    'header  header'
    'sidebar content';
  grid-template-columns: 2fr 8fr;
  grid-template-rows: auto 1fr;
  grid-gap: 8px;
  background-color: ${props => (props.darkMode ? '#444' : '#DDD')};
  transition: all 0.2s;
`

export default Grid

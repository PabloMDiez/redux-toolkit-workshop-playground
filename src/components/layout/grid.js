import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas:
    'header  header'
    'sidebar content'
  ;
  grid-template-columns: 20% 80%;
  grid-template-rows: auto 1fr;
  grid-gap: 8px;
  background-color: ${props => props.darkMode ? '#444' : '#DDD'};
`

export default Grid

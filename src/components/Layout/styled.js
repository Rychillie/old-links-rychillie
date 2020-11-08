import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  min-height: -webkit-fill-available;
  max-height: -webkit-fill-available;

  @media screen and (min-width: 991px) {
    flex-direction: row;
  }
`

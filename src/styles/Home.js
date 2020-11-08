import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 991px) {
    flex: 2;
  }
`

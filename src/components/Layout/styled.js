import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  header {
    flex: none !important;
  }

  @media screen and (min-width: 991px) {
    width: 75%;
    max-width: 70rem;

    header {
      flex: none !important;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 40px;

        .imageContainer {
          margin-top: 0 !important;
        }

        .content {
          flex: 1;
          margin-left: 60px;
        }
      }
    }
  }
`

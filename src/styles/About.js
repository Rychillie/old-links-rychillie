import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  @media screen and (min-height: 660px) {
    justify-content: center;
  }

  @media screen and (min-width: 991px) {
    justify-content: center;
  }
`
export const Header = styled.header`
  > div {
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
    align-items: center;
  }
`

export const Nav = styled.nav`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: white;
    padding: 8px 12px 8px 0;
    font-weight: bold;
    text-transform: uppercase;

    svg {
      height: 42px;
      margin-left: -14px;
    }

    &:hover {
      opacity: 0.65;
    }
  }
`

export const Container = styled.div`
  margin: 40px auto 60px;
  width: 90%;

  @media screen and (min-width: 991px) {
    width: 75%;
    max-width: 70rem;
  }
`

export const ImageHeader = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  overflow: hidden;

  @media screen and (min-height: 660px) {
    width: 95px;
    height: 95px;
    border-radius: 14px;
  }

  @media screen and (min-height: 800px) {
    width: 120px;
    height: 120px;
    border-radius: 16px;
  }

  @media screen and (min-width: 479px) {
    width: 95px;
    height: 95px;
    border-radius: 14px;
  }

  @media screen and (min-width: 991px) {
    width: 120px;
    height: 120px;
    border-radius: 16px;
  }
`

import styled from "styled-components"

export const Header = styled.header`
  > div.line {
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0 !important;
    margin-top: 20px !important;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-bottom: 60px;

  @media screen and (min-height: 660px) {
    justify-content: center;
  }

  @media screen and (min-width: 991px) {
    justify-content: center;
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

export const Container = styled.div`
  margin: 40px auto 60px;
  width: 90%;

  @media screen and (min-width: 991px) {
    width: 75%;
    max-width: 70rem;
  }
`

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 320px;
  max-height: 320px;
  margin-right: 0;
  margin-bottom: 40px;
  z-index: 5;

  @media screen and (min-width: 1280px) {
    margin-right: 40px;
    margin-bottom: 0;
  }

  .principal {
    width: 100%;
    height: 100%;
    max-width: 320px;
    max-height: 320px;
    border-radius: 32px;
    overflow: hidden;
  }
`

export const Before = styled.div`
  display: none;

  @media screen and (min-width: 991px) {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 320px;
    max-height: 320px;
    border-radius: 32px;
    overflow: hidden;
    position: absolute;
    filter: blur(32px);
    transform: scale(0.9);
    opacity: 0.45;
    bottom: -25px;
    left: 0;
    z-index: -1;
  }
`

export const About = styled.div`
  flex: 1;

  h1 {
    margin-bottom: 4%;

    span {
      display: flex;
      width: 100%;
      font-size: 60%;
      font-weight: 500;
    }
  }

  p {
    margin-bottom: 3%;
    line-height: 150%;
  }
`

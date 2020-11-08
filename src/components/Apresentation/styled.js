import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 86%;
  margin: 0 auto;

  @media screen and (min-width: 479px) {
    width: 60%;
    margin: 0 auto 0 10%;
  }

  @media screen and (min-width: 991px) {
    width: 78%;
    margin: 0 auto 0 8%;
  }

  h1 {
    color: #fff;
    line-height: 121%;
    font-size: 1.4rem;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 0;
    margin-right: 0;

    @media screen and (min-width: 479px) {
      font-size: 1.8rem;
    }

    @media screen and (min-width: 991px) {
      font-size: 2rem;
    }
  }
`

export const Image = styled.div`
  width: fit-content;
  border-radius: 12px;
  overflow: hidden;

  @media screen and (min-width: 479px) {
    border-radius: 14px;
  }

  @media screen and (min-width: 991px) {
    border-radius: 16px;
  }
`

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 0;
`

export const MyLink = styled.a`
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  color: #fff;

  @media screen and (min-width: 479px) {
    width: 34px;
    height: 34px;
  }

  @media screen and (min-width: 991px) {
    width: 48px;
    height: 48px;
  }

  svg {
    max-width: 28px;
    max-height: 28px;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 479px) {
      max-width: 32px;
      max-height: 32px;
    }

    @media screen and (min-width: 991px) {
      max-width: 36px;
      max-height: 36px;
    }
  }

  & + a {
    margin-left: 10px;
  }
`

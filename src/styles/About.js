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

  h1 {
    margin-bottom: 4%;

    span {
      display: flex;
      width: 100%;
      font-size: 60%;
      font-weight: 500;
    }
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
  max-width: 210px;
  max-height: 210px;
  margin-right: 0;
  margin-top: 10px;
  margin-bottom: 30px;
  z-index: 5;

  @media screen and (min-width: 991px) {
    margin-top: 0;
    max-width: 320px;
    max-height: 320px;
  }

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

  p {
    margin-bottom: 3%;
    line-height: 150%;
  }
`

export const Contato = styled.div`
  padding: 40px 0 40px;

  form.formcontato {
    input {
      &.name,
      &.email {
        @media screen and (min-width: 991px) {
          width: 49%;
        }
      }

      & + input {
        margin-top: 4%;

        @media screen and (min-width: 991px) {
          margin-top: 2%;
          margin-top: 0;
        }
      }
    }

    textarea {
      resize: vertical;
      min-height: 140px;
    }

    input,
    textarea {
      width: 100%;
      padding: 16px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 2px solid transparent;
      color: #fff;

      &:focus {
        border-color: rgba(255, 255, 255, 0.1);
      }

      &::placeholder {
        color: #fff;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
    }

    button {
      padding: 16px;
      border-radius: 12px;
      border: 2px solid transparent;
      text-transform: uppercase;
      font-weight: 700;
      background: #0dac50;
      color: #fff;
      width: 100%;

      @media screen and (min-width: 479px) {
        width: 140px;
      }

      &:hover {
        opacity: 0.65;
      }
    }

    div {
      display: flex;

      &.details {
        flex-direction: column;
        margin-bottom: 4%;

        @media screen and (min-width: 991px) {
          margin-bottom: 2%;
          flex-direction: row;
          justify-content: space-between;
        }
      }

      &.textarea {
        margin-bottom: 4%;

        @media screen and (min-width: 991px) {
          margin-bottom: 2%;
        }
      }
    }
  }
`

export const Footer = styled.footer`
  margin-top: 40px;
  margin-bottom: 60px;
  text-align: center;
`

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 0;
  justify-content: center;
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

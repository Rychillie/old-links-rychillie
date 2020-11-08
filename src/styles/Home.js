import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  overflow: hidden;

  @media screen and (min-width: 991px) {
    justify-content: center;
    flex: 1;
  }
`

export const Container = styled.div`
  display: flex;
  padding: 7%;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  @media screen and (min-width: 991px) {
    flex-wrap: wrap;
    overflow-x: unset;
  }

  a {
    scroll-snap-align: center;
    display: flex;
    margin: 2%;
    min-width: 96%;
    padding: 1.5rem;
    text-decoration: none;
    color: white;
    border-radius: 12px;
    overflow: hidden;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.05);
    border: 2px solid transparent;

    &:last-child {
      margin-right: 1.5rem;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.02);
      border: 2px solid rgba(255, 255, 255, 0.05);
    }

    @media screen and (min-width: 479px) {
      border-radius: 14px;
    }

    @media screen and (min-width: 991px) {
      border-radius: 16px;
      width: 46%;
    }

    h3 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
    }

    p {
      margin: 0;
      font-size: 1.25rem;
      line-height: 1.5;
      color: rgb(255 255 255 / 65%);
    }
  }
`

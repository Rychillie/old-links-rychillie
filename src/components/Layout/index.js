import React from "react"
import { GlobalStyle } from "../../styles/GlobalStyle"

import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <S.Main>{children}</S.Main>
    </>
  )
}

export default Layout

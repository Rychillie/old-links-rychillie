import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout

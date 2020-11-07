import React from "react"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `94%`,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout

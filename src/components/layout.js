import "./index.css"

import { Link } from "gatsby"
import React from "react"
import { useSiteMetadata } from "./hooks"

function Layout({ children }) {
  const { title } = useSiteMetadata()

  return (
    <>
      <header className="header">
        <Link to="/">
          <h4 className="site-title">{title}</h4>
        </Link>
        <nav className="nav">
          <a className="nav-link" href="#">
            Navlink
          </a>
          <a className="nav-link" href="#">
            Navlink
          </a>
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Link to="/">
          <h4 className="site-title">{title}</h4>
        </Link>
      </footer>
    </>
  )
}

export default Layout

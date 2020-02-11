import "./index.css"

import { Link } from "gatsby"
import { Navlink } from "."
import React from "react"
import { useSiteMetadata } from "./hooks"

function Layout({ location, children }) {
  const { title } = useSiteMetadata()

  return (
    <>
      <header className="header">
        <Link to="/" className="none">
          <h4 className="site-title text--sm">{title}</h4>
        </Link>
        <nav className="nav">
          <Navlink to="/classes" text="Classes" location={location} />
          <Navlink to="/components" text="Components" location={location} />
          <Navlink to="/variables" text="Variables" location={location} />
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Link to="/" className="none nav-link site-title">
          <span className="text--sm">{title}</span>
        </Link>
      </footer>
    </>
  )
}

export default Layout

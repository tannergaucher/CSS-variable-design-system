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
        {location.pathname === "/" ? null : (
          <Link to="/" className="none">
            <h4 className="site-title">{title}</h4>
          </Link>
        )}
        <nav className="nav">
          <Navlink to="/classes" text="Classes" location={location} />
          <Navlink to="/components" text="Components" location={location} />
          <Navlink to="/variables" text="Variables" location={location} />
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Link to="/" className="none">
          <small className="site-title">{title}</small>
        </Link>
      </footer>
    </>
  )
}

export default Layout

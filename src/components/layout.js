import "./index.css"

import { Link } from "gatsby"
import React from "react"
import { useSiteMetadata } from "./hooks"

const Navlink = ({ text, to, location }) => {
  return (
    <Link
      to={to}
      className="nav-link"
      style={{
        textDecoration: location.pathname === to ? `underline` : `none`,
        color: location.pathname === to ? `var(--href-hover-color)` : `inherit`,
      }}
    >
      {text}
    </Link>
  )
}

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
          <Navlink to="/variables" text="Variables" location={location} />
          <Navlink to="/examples" text="Examples" location={location} />
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

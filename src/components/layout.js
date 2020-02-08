import "./index.css"

import { Link } from "gatsby"
import React from "react"
import { useSiteMetadata } from "./hooks"

function Layout({ location, children }) {
  const { title } = useSiteMetadata()

  return (
    <>
      <header className="header">
        {/*Why is location undefined? Gatsby bug? */}
        {location && location.pathname === "/" ? null : (
          <Link to="/" className="none">
            <h4 className="site-title">{title}</h4>
          </Link>
        )}

        <nav className="nav">
          <Link
            to="/classes"
            className="nav-link"
            style={{
              textDecoration:
                location.pathname === "/classes" ? `underline` : `none`,
            }}
          >
            Classes
          </Link>
          <Link
            to="/variables"
            className="nav-link"
            style={{
              textDecoration:
                location.pathname === "/variables" ? `underline` : `none`,
            }}
          >
            Variables
          </Link>
          <Link
            to="/examples"
            className="nav-link"
            style={{
              textDecoration:
                location.pathname === "/examples" ? `underline` : `none`,
            }}
          >
            Examples
          </Link>
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

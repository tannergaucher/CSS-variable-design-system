import React from "react"

import Layout from "../components/layout"

export default function PageTwo() {
  return (
    <Layout>
      <header className="component" style={{ background: `papayawhip` }}>
        <h2>Header</h2>
      </header>

      <main className="component">Main</main>

      <footer className="component" style={{ background: `papayawhip` }}>
        <h4>Footer</h4>
      </footer>
    </Layout>
  )
}

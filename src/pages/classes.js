import { Layout } from "../components"
import React from "react"

export default function ClassesPage({ location }) {
  return (
    <Layout location={location}>
      <article className="container padding">
        <h1 className="h1">Classes</h1>
      </article>
    </Layout>
  )
}

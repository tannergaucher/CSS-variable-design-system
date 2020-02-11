import { Blockquote, Image, P } from "../helpers"
import {
  Card,
  ContentGrid,
  Fieldset,
  Figure,
  ImageGrid,
  Layout,
  SEO,
} from "../components"
import { useExampleImage, useSiteMetadata } from "../components/hooks"

import Img from "gatsby-image"
import { Link } from "gatsby"
import React from "react"

function IndexPage({ location }) {
  const { title, description } = useSiteMetadata()

  return (
    <Layout location={location}>
      <SEO title={title} />

      <article className="container padding center page">
        <h1>{description}</h1>
        <p>
          Featuring responsive typography and spacing, adjustable vertical
          rhythm, automatic light / dark mode. Customizable with CSS variables.
        </p>
        <hr className="hr" />
        <h1 className="h1">Heading One</h1>
        <h2>Heading Two</h2>
        <h3>Heading Three</h3>
        <h4>Heading Four</h4>
        <small>Small</small>
        <P />
        <Blockquote />
        <hr className="hr" />
        <Figure />
        <P />
        <hr className="hr" />
        <ContentGrid />
        <hr className="hr" />
        <ImageGrid />
        <hr className="hr" />
        <Fieldset />
        <button className="btn">Button</button>
        <button className="btn" disabled>
          Disabled Button
        </button>
        <button className="btn btn-primary" disabled>
          Disabled Primary Button
        </button>
        <form action="" className="form">
          <textarea
            className="textarea"
            cols="30"
            placeholder="Textarea"
          ></textarea>
          <button className="btn btn-primary">Submit</button>
        </form>
        {/* TODO: add color swatches */}
      </article>
    </Layout>
  )
}

export default IndexPage

import { Layout, SEO } from "../components"
import { useExampleImage, useSiteMetadata } from "../components/hooks"

import Img from "gatsby-image"
import { Link } from "gatsby"
import React from "react"

function IndexPage() {
  const { title } = useSiteMetadata()
  const { fluid } = useExampleImage()

  return (
    <Layout>
      <SEO title={title} />
      <article className="page">
        <h1>Heading One</h1>
        <h2>Heading Two</h2>
        <h3>Heading Three</h3>
        <h4>Heading Four</h4>
        <small>Small</small>
        <p>
          Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam eget orci ac sapien consequat posuere et id lectus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Mauris egestas finibus enim, vel luctus felis
          pretium et. Pellentesque iaculis dui sit amet tempor rutrum.
          Suspendisse commodo molestie commodo. Fusce porttitor eget est sit
          amet ultricies. Proin malesuada velit id velit viverra pretium.
        </p>
        <blockquote>
          Blockquote Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam eget orci ac sapien consequat posuere et id lectus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Mauris egestas finibus enim, vel luctus felis
          pretium et. Pellentesque iaculis dui sit amet tempor rutrum.
          Suspendisse commodo molestie commodo. Fusce porttitor eget est sit
          amet ultricies. Proin malesuada velit id velit viverra pretium.
        </blockquote>
        <p>
          Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam eget orci ac sapien consequat posuere et id lectus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Mauris egestas finibus enim, vel luctus felis
          pretium et. Pellentesque iaculis dui sit amet tempor rutrum.
          Suspendisse commodo molestie commodo. Fusce porttitor eget est sit
          amet ultricies. Proin malesuada velit id velit viverra pretium.
        </p>
        <fieldset className="fieldset">
          <form className="form" action="">
            <input className="input" type="email" placeholder="Input" />
            <button className="btn btn-primary" type="">
              Primary Button
            </button>
          </form>
        </fieldset>
        <button className="btn" style={{ marginRight: `var(--space-md)` }}>
          Button
        </button>
        <button
          className="btn"
          style={{ marginRight: `var(--space-md)` }}
          disabled
        >
          Disabled Button
        </button>
        <button className="btn btn-primary" disabled>
          Disabled Primary Button
        </button>
        <form action="" className="form">
          <textarea
            className="text-area"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Textarea"
          ></textarea>
        </form>
        <p>
          Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam eget orci ac sapien consequat posuere et id lectus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Mauris egestas finibus enim, vel luctus felis
          pretium et. Pellentesque iaculis dui sit amet tempor rutrum.
          Suspendisse commodo molestie commodo. Fusce porttitor eget est sit
          amet ultricies. Proin malesuada velit id velit viverra pretium.
        </p>
        <hr className="hr" />
        <figure className="figure">
          <Img fluid={fluid} />
          <figcaption className="figcaption text--sm">
            Figcaption at the beach.
          </figcaption>
        </figure>
        <p>
          Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam eget orci ac sapien consequat posuere et id lectus. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Mauris egestas finibus enim, vel luctus felis
          pretium et. Pellentesque iaculis dui sit amet tempor rutrum.
          Suspendisse commodo molestie commodo. Fusce porttitor eget est sit
          amet ultricies. Proin malesuada velit id velit viverra pretium.
        </p>
      </article>
    </Layout>
  )
}

export default IndexPage

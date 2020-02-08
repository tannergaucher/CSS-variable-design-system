import { Layout, SEO } from "../components"
import { useExampleImage, useSiteMetadata } from "../components/hooks"

import Img from "gatsby-image"
import { Link } from "gatsby"
import React from "react"

const P = () => (
  <p>
    Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    eget orci ac sapien consequat posuere et id lectus. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Mauris egestas finibus enim, vel luctus felis pretium et. Pellentesque
    iaculis dui sit amet tempor rutrum. Suspendisse commodo molestie commodo.
    Fusce porttitor eget est sit amet ultricies. Proin malesuada velit id velit
    viverra pretium.
  </p>
)

const Blockquote = () => (
  <blockquote className="blockquote">
    Blockquote Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    eget orci ac sapien consequat posuere et id lectus. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Mauris egestas finibus enim, vel luctus felis pretium et. Pellentesque
    iaculis dui sit amet tempor rutrum. Suspendisse commodo molestie commodo.
    Fusce porttitor eget est sit amet ultricies. Proin malesuada velit id velit
    viverra pretium.
  </blockquote>
)

const Image = () => {
  const { fluid } = useExampleImage()
  return <Img fluid={fluid} />
}

const Card = () => (
  <div className="card">
    <h4 className="card--title">I'm a Card Title</h4>
    <Image />
    <p className="card--text">
      Card text is a paragraph element with a class name of card dash dash text.
    </p>
  </div>
)

const Fieldset = () => (
  <fieldset className="fieldset">
    <form className="form" action="">
      <input className="input" type="email" placeholder="Input" />
      <button className="btn btn-primary" type="submit">
        Primary Button
      </button>
    </form>
  </fieldset>
)

function IndexPage({ location }) {
  const { title, description } = useSiteMetadata()

  return (
    <Layout location={location}>
      <SEO title={title} />
      <article className="container padding center page">
        <h1 className="h1">{title}</h1>
        <h2>{description}</h2>
        <hr className="hr" />
        <P />
        <Blockquote />
        <P />
        <hr className="hr" />
        <h2>Heading to the Beach</h2>
        <P />
        <figure className="figure">
          <Image />
          <figcaption className="figcaption text--sm">
            Figcaption at the beach.
          </figcaption>
        </figure>
        <P />
        <div className="responsive-content-grid">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <h3>Heading Three Hours North</h3>
        <P />
        <h4>Heading For Trouble</h4>
        <P />
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
      </article>
    </Layout>
  )
}

export default IndexPage

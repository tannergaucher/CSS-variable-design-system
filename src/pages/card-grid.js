import Img from "gatsby-image"
import { Layout } from "../components"
import React from "react"
import { useExampleImage } from "../components/hooks"

const Image = () => {
  const { fluid } = useExampleImage()
  return <Img fluid={fluid} />
}

const Card = () => {
  return (
    <div className="card">
      <h3 className="card-title">Card Title</h3>
      <Image />
      <p className="card-text">Card text sentence.</p>
    </div>
  )
}

export default function CardGrid({ location }) {
  return (
    <Layout location={location}>
      <div className="container center responsive-content-grid padding page">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  )
}

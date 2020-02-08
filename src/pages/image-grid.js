import Img from "gatsby-image"
import { Layout } from "../components"
import React from "react"
import { useExampleImage } from "../components/hooks"

const Image = () => {
  const { fluid } = useExampleImage()

  return <Img fluid={fluid} alt="At the beach" />
}

export default function ImageGrid({ location }) {
  return (
    <Layout location={location}>
      <div className="page only-fullscreen-padding">
        <h1 className="h1 only-mobile-padding">
          Responsive Fullscreen Image Grid
        </h1>
        <div className="image-grid">
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
      </div>
    </Layout>
  )
}

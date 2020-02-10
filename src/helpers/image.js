import Img from "gatsby-image"
import React from "react"
import { useExampleImage } from "../components/hooks"

export default function Image() {
  const { fluid } = useExampleImage()

  return <Img fluid={fluid} />
}

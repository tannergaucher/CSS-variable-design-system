import { graphql, useStaticQuery } from "gatsby"

export const useExampleImage = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { regex: "/example/" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return file.childImageSharp
}

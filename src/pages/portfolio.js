import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const PortfolioPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Resume"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="title">pdf portfolio</h2>
          <a href="https://drive.google.com/file/d/17u_666jtV_WtOI8rS6rPITE5Dk_xF5MM/view?usp=sharing">
            <figure className="kg-card kg-image-card kg-width-full">
              <Img
                fluid={data.portfolioCover.childImageSharp.fluid}
                className="kg-image"
              />
              <figcaption>Portfolio cover, click for pdf link</figcaption>
            </figure>
          </a>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    portfolioCover: file(relativePath: { eq: "portfolio.001.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <PortfolioPage location={props.location} data={data} {...props} />
    )}
  />
)

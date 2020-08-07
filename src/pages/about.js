import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <Helmet>
        <script type="text/javascript">{`
        (function(){
          var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
          i.src = "https://cdn.curator.io/published/64590b28-e330-43d2-a8ee-977195de720e.js";
          e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
        })();
        `}</script>
      </Helmet>

      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="title">Who is Leia?</h2>
          <p>
            Leia is a programmer and artist based in the Bay Area. Currently a
            frontend developer for Square, she is an active advocate, organizer,
            and mentor for Women in Engineering communities.
          </p>
          <p>
            In her spare time, Leia is a budding artist using both traditional
            and New media to explore the tension between comfort and the
            unknown. She is an avid Maker, Tinkerer, and Sometimes-Photographer.
          </p>
          <p>
            For more of her past work, check out Leia's{" "}
            <Link to={`/portfolio`}>static portfolio</Link>.
          </p>
        </div>

        <div id="curator-feed-default-feed-layout">
          <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">
            Powered by Curator.io
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
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
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
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)

import React from "react"
import { Link } from "gatsby"

export default props => (
  <article className={`blog-post-card post no-image`}>
    <Link to={props.node.fields.slug}>
      <div className="blog-post-card-content">
        <div className="blog-post-card-header">
          <div className="blog-post-card-titles">
            <h2 className="blog-post-card-title">
              {props.node.frontmatter.title || props.node.fields.slug}
            </h2>
            <h3 className="blog-post-card-subtitle">
              {props.node.frontmatter.description}
            </h3>
          </div>
          <div className="blog-post-card-date">
            {props.node.frontmatter.date}
          </div>
        </div>
      </div>
    </Link>
  </article>
)

import React from "react"
import { Link } from "gatsby"

export default props => (
  <Link className="blog-post-card" to={props.node.fields.slug}>
    <div className="blog-post-card-header">
      <h3 className="blog-card-title">
        {props.node.frontmatter.title || props.node.fields.slug}
      </h3>
      <div className="blog-card-date">{props.node.frontmatter.date}</div>
    </div>

    <div className="blog-card-contents">
      <h4 className="blog-card-descrip">
        {" "}
        {props.node.frontmatter.description}
      </h4>
      <p>{props.node.excerpt}</p>
    </div>
  </Link>
)

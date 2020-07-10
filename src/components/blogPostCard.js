import React from "react"
import { Link } from "gatsby"

export default props => (
  <Link className="blog-post-card" to={props.node.fields.slug}>
      <div className="blog-card-contents">
        <div className="blog-card-title">{props.node.frontmatter.title || props.node.fields.slug}</div>
        <p className="blog-card-p"> - {props.node.frontmatter.description}</p>
      </div>
      <div className="blog-card-date">{props.node.frontmatter.date}</div>
  </Link>
)

import React from "react"
import { Link } from "gatsby"

const TagMenu = props => {
  return (
    <nav className="tag-menu">
      <ul role="menu">
        <li role="menuitem">
          <Link to={`/blog`}>All Posts</Link>
        </li>
        <li role="menuitem">
          <Link to={`/tags/itp`}>ITP</Link>
        </li>
        <li role="menuitem">
          <Link to={`/tags`}>All Tags</Link>
        </li>
      </ul>
    </nav>
  )
}

export default TagMenu

import React from "react"
import { Link } from "gatsby"

const TagMenu = props => {
  const [toggleNav, setToggleNav] = React.useState(false)
  const pagePath =
    typeof window !== "undefined" ? window.location.pathname.split("/")[1] : ""

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

import React from "react"
import { Link } from "gatsby"

const TagMenu = props => {
  const [toggleNav, setToggleNav] = React.useState(false)
  const pagePath =
    typeof window !== "undefined" ? window.location.pathname.split("/")[1] : ""

  return (
    <div className="site-head-container">
      <a
        className="nav-burger"
        href={`#`}
        onClick={() => setToggleNav(!toggleNav)}
      >
        <div
          className="hamburger hamburger--collapse"
          aria-label="Menu"
          role="button"
          aria-controls="navigation"
        >
          <div className="hamburger-box">
            <div className="hamburger-inner" />
          </div>
        </div>
      </a>
      <nav id="swup" className="site-head-left">
        <ul className="nav" role="menu">
          <li className={`nav-home`} role="menuitem">
            <Link to={`/blog`}>All Posts</Link>
          </li>
          <li className={`nav-home`} role="menuitem">
            <Link to={`/tags/itp`}>ITP</Link>
          </li>
          <li className={`nav-home`} role="menuitem">
            <Link to={`/tags`}>All Tags</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default TagMenu

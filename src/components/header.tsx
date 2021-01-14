import { Link } from "gatsby"
import React from "react"

interface Props{
  siteTitle?: string;
}

const Header: React.FC<Props> = ({ siteTitle = 'svenskahemsida' }) => (
  <header>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `black`,
          fontFamily: `Josefin Sans`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

export default Header

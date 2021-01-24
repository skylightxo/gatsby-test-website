import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import 'antd/dist/antd.css';

import Header from "./header"
import "./layout.css"

interface Props{
  children: React.ReactNode,
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
        <div className="footer__image" />
        <p className="footer__text">© 2021 sveahemsidor <br /> All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default Layout

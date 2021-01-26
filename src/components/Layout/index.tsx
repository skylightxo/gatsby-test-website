import React, { useContext } from "react"
import { MenuProvider } from '../../contexts/MenuContext/';
import { useStaticQuery, graphql } from "gatsby"
import 'antd/dist/antd.css';

import { Header } from "../"
import "./layout.css"

interface Props{
  children: React.ReactNode,
}

export const Layout: React.FC<Props> = ({ children }) => {
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
    <MenuProvider>
      <Header siteTitle={data.site.siteMetadata?.title || `sveahemsidor.`} />
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
    </MenuProvider>
  )
}
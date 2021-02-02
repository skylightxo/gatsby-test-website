/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`Sveahemsidor - svensktillverkade webbplatser.`}
      titleTemplate={`Sveahemsidor - svensktillverkade webbplatser.`}
      meta={[
        {
          name: `description`,
          content: `Få din egen hemsida med webbhotell nu.`,
        },
        {
          property: `og:title`,
          content: `Sveahemsidor - bästa svenska hemsidor!`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://sveahemsidor.se/static/2f30fb613349e2934ff1ebfc8b323f67/First-carousel-bg.png`,
        },
        {
          property: `og:image:secure_url`,
          content: `https://sveahemsidor.se/static/2f30fb613349e2934ff1ebfc8b323f67/First-carousel-bg.png`,
        },
        {
          property: `og:image:alt`,
          content: `Bästa Svenska Hemsidor!`,
        },
        {
          property: `og:image:width`,
          content: `685`,
        },
        {
          property: `og:image:height`,
          content: `583`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `se`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.svenskahemsida.se`, //change later to a proper one
    siteTitle: `sveahemsidor.`,
    author: `Daniil Krutogolov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `svenska-hemsida`,
        short_name: `svemsida`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#1C5BFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway\:300,400,500,600,700,900`, `Josefin Sans`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: true,
        https: false,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: "sveahemsidor.se/", // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 404 /404/index.html
          `,
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Evoytic, Inc.`,
    description: `Official Website`,
    author: `@evoytic`,
    footerData: {
      email: `contact@evoytic.com`,
      address: `2093 Philadelphia Pike #1944 Claymont, DE 19703`,      
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Evoytic`,
        short_name: `evoytic`,
        start_url: `/`,
        background_color: `#3744ea`,
        theme_color: `#3744ea`,
        display: `minimal-ui`,
        icon: `src/images/evoytic-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-0417F6ER5J'
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        }
      },
    },
    'gatsby-plugin-offline',
  ],
}

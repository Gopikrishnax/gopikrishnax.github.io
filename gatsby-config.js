module.exports = {
  siteMetadata: {
    title: `Gopi Krishna`,
    description: `Developer at Paytm insider. I  💖  JavaScript and React.`,
    author: `@_bgopikrishna`,
    siteUrl: `https://gopikrishna.dev`,
    email: 'b.gopikrishna@outlook.in',
    authorName: 'Gopi Krishna',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gopi Krishna`,
        short_name: `GK`,
        start_url: `/blog`,
        background_color: `#111`,
        theme_color: `#8083ff`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-174474466-1',
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: true,
            },
          },
          `gatsby-remark-images-anywhere`,

        ],
      },
    },
    {
      resolve: 'gatsby-plugin-remove-console',
      options: {
        exclude: ['error', 'warn'], // <- will be removed all console calls except these
      },
    },
  ],
};

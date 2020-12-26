module.exports = {
  siteMetadata: {
    title: `Rychillie`,
    description: `Um jovem desenvolvedor Frontend que deseja compartilhar seus conhecimentos. Buscando sempre evoluir e melhorar em todos os aspectos.`,
    image: `src/images/rychillie.png`,
    author: `@rychillie`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rychillie`,
        short_name: `Rychillie`,
        start_url: `/`,
        background_color: `#111`,
        theme_color: `#111`,
        display: `minimal-ui`,
        icon: `src/images/rychillie.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-45575876-4",
        head: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

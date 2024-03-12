// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
//  })
const env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`}); 

module.exports = {
  siteMetadata: {
    defaultTitle: `柳川芳鉄工所`,
    defaultDescription: `【公式】柳川芳鉄工所`,
    defaultImage: "src/image/social-card.png",
    siteUrl: "https://yanagawa-yoshi.co.jp",
  },
  plugins: [
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `react-router-dom`,
    `react-router-hash-link`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://yanagawa-yoshi.co.jp`,  //変更
        sitemap: `https://yanagawa-yoshi.co.jp/sitemap-index.xml`, //変更
        policy: [{ userAgent: `*`, allow: `/` }]
      }
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [
          {
          endpoint: 'articles',    // micorCMSで作ったapiのエンドポイントを記載
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://yanagawa-yoshi.co.jp`, //変更
        stripQueryString: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_short.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-3CMR3GJDD9`,
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    }
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

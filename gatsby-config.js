// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
//  })
const env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`}); 

module.exports = {
  siteMetadata: {
    defaultTitle: `一般社団法人甲府青年会議所 2025年度 - Here We Go! ～その一歩で君が変わる、まちが変わる～`,
    defaultDescription: `一般社団法人甲府青年会議所は「修練」「奉仕」「友情」の３信条のもと、「明るい豊かな社会の実現」を目指し「まちづくり」「ひとづくり」「組織づくり」をしている団体です。`,
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
    // {
    //   resolve: `gatsby-plugin-robots-txt`,
    //   options: {
    //     host: `https://yanagawa-yoshi.co.jp`,  //変更
    //     sitemap: `https://yanagawa-yoshi.co.jp/sitemap-index.xml`, //変更
    //     policy: [{ userAgent: `*`, allow: `/` }]
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: `https://yanagawa-yoshi.co.jp`, //変更
    //     stripQueryString: true,
    //   },
    // },
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
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [
    //       `G-TN0FTC1C9G`,
    //     ],
    //     gtagConfig: {
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     pluginConfig: {
    //       head: true,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //     },
    //   },
    // }
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

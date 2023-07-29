module.exports = {
  siteMetadata: {
    title: `Preet Suthar 🚀| Frontend Developer`,
    author: `Preet Suthar`,
    description: `Welcome to Preet's Portfolio & blog, You'll soo many tips and tricks also some blogs related to web development, javascript, so much other stuff. You are always welcome`,
    siteUrl: `https://preetsuthar.me`,
    social: [
      {
        name: `Github`,
        url: `https://github.com/preetsuthar17`,
      },
    ],
  },

  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-anchor-links',
    'gatsby-plugin-webpack-size',

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 540,
            },
          },
        ],
      },
      plugin: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 540,
          },

          resolve: 'gatsby-plugin-anchor-links',
          options: {
            offset: 540,
          },
        },
      ],
    },

    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true,
      },
    },
    {
      resolve: `gatsby-plugin-partytown`,
      options: {
        loading: 'eager',
        injectHtmlPaths: ['/path/to/your/html/files'],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-SNZ3SF5BM8`,
      },
    },
    `gatsby-remark-reading-time`,
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.3, // Adjust this value to control when the animation triggers (0.0 to 1.0)
        once: true, // Set this to true if you want the animation to occur only once
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: '/',
        background_color: '#1d1d1d',
        theme_color: '#7289DA',
        display: 'standalone',
        icon: 'src/img/nano-favicon.png',
        crossOrigin: `use-credentials`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //           }
    //         }
    //       }
    //     `,
    //   },
    // },

    `gatsby-transformer-json`,
  ],
}

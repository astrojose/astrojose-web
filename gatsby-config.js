module.exports = {
  siteMetadata: {
    title: `astrojose`,
    author: {
      name: `Joseph Emmanuel`,
      summary: `Software Developer and blogger. I learn, write and sometimes teach about code.`,
    },
    description: `In this blog, you will find skills for modern Developers.`,
    siteUrl: `https://astrojose.com/`,
    social: {
      twitter: `astrojose_`,
      instagram: `astrojose_`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
	{
	resolve: 'gatsby-plugin-robots-txt',
		options: {
			host: 'https://www.astrojose.com',
			sitemap: 'https://www.astrojose.com/sitemap.xml',
			policy: [{ userAgent: '*', allow: '/' }]	}
	},
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
              
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Astrojose Blog`,
        short_name: `Astrojose`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff1493`,
        display: `minimal-ui`,
        icon: `content/assets/astro-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
	`gatsby-plugin-sitemap`,
	  {
	resolve: `gatsby-plugin-google-gtag`,
	options: {
					// You can add multiple tracking ids and a pageview event will be fired for all of them.
			trackingIds: [
			    "G-QYESHGW9FCS",			
				"AW-CONVERSION_ID", // Google Ads / Adwords / AW
			   "DC-FLOODIGHT_ID", // Marketing Platform ad products (Display  Manager)
			],
		 },
	  },
  ],
}

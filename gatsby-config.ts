import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `GatsbySite`,
    defaultTitle: `GatsbySite`,
    defaultDescription: `GatsbySite Description`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Events",
        link: "/events",
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content-events",
        path: "./content/events",
      },
      __key: "content-events",
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Event",
      },
    },
  ],
};

export default config;

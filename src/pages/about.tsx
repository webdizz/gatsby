import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import CarImage from "../components/CarImage";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const AboutPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <CarImage />
      {data.allFile.edges.map(({ node }) => (
        <GatsbyImage image={getImage(node)} alt={node.name} key={node.id} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "cars" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
          id
          name
        }
      }
    }
  }
`;

export default AboutPage;

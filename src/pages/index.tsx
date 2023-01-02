import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import CarImage from "../components/CarImage";
import Layout from "../components/Layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const NewWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 2rem 2rem 1rem;
  border-radius: 1rem;
  background #ffffff;
  box-shadow: 1rem 1rem 3rem hsla(0, 0%, 100%, 0.2), -1rem -1rem 3rem #ffffff
`;

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <NewWrapper>
        <CarImage />
      </NewWrapper>
      <NewWrapper>
        <StaticImage src="../images/car.png" alt="Car" layout="fullWidth" />
      </NewWrapper>
    </Layout>
  );
};

export default IndexPage;

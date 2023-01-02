import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import CarImage from "../components/CarImage";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <CarImage />
    </Layout>
  );
};

export default AboutPage;

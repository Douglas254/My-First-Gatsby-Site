// Import React
import * as React from "react";
// Import Link component
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Define <IndexPage> component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>

      <StaticImage
        alt="Douglas, thats my selfie picture from side"
        src="../images/douglas.jpg"
      />
    </Layout>
  );
};

// Export my component
export default IndexPage;

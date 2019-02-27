import React from "react";
// import Layout from "../components/DefaultLayout.js";
import GreenLayout from "../components/GreenLayout";
import Error from "next/error";

// const About = () => {
//   // <Layout title="Welcome to Next.js">
//    return <p>Hello from About</p>
//   // </Layout>
// }

class About extends React.Component {
  static async getInitialProps({ req, query }) {
    // const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    const Title = "this.props.query.title";
    return { Title };
  }

  render() {
    return (
      <>
        {/* Hello World: {this.props.userAgent} */}
        Hello World
        <Error statusCode={500} />
      </>
    );
  }
}

About.Title = "Hello from About";
// About.Layout = GreenLayout;
export default About;

import React from "react";
// import Layout from "../components/DefaultLayout.js";
import GreenLayout from "../components/GreenLayout";
import Error from "next/error";
import Link from "next/link";

// const About = () => {
//   // <Layout title="Welcome to Next.js">
//    return <p>Hello from About</p>
//   // </Layout>
// }

const links = [
  { href: "https://github.com/zeit/next.js", label: "Github" },
  { href: "https://nextjs.org/docs", label: "Docs" }
];

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
        <div>
          <nav>
            <ul className="flex justify-between items-center p-8">
              <li className="list-reset">
                <Link prefetch href="/">
                  <a className="text-blue no-underline">Home</a>
                </Link>
              </li>
              <ul className="flex justify-between items-center">
                {links.map(({ href, label }) => (
                  <li key={`${href}${label}`} className="list-reset ml-4">
                    <Link href={href}>
                      <a className="btn-blue no-underline">{label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </ul>
          </nav>
          <div className="hero">
            <h1 className="title">Next.js + Tailwind css</h1>
          </div>
        </div>
        <Error statusCode={500} />
      </>
    );
  }
}

About.Title = "Hello from About";
// About.Layout = GreenLayout;
export default About;

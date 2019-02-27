import Header from "./Header";
import Head from "next/head";

const GreenLayout = ({ children, title = "Default title in MyLayout" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav style={{ border: '4px dashed green' }}>
        <Header />
      </nav>
    </header>

    {children}

    <footer>{"I`m here to stay"}</footer>
  </div>
);

export default GreenLayout;

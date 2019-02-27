import Header from "./Header";
import Head from "next/head";

const Layout = ({ children, title = "Default title in MyLayout" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Header />
      </nav>
    </header>

    {children}

    <footer>{"Footer: I`m here to stay"}</footer>
  </div>
);

export default Layout;

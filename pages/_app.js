import Layout from "../components/DefaultLayout.js";
import GreenLayout from "../components/GreenLayout";
import Header from "../components/Header";
import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

// class AppLayout extends React.Component {
//   render() {
//     const {
//       children,
//       title = "Default title in _app",
//       layout = Layout
//     } = this.props;
//     return <Layout title={title}>{children}</Layout>;
//   }
// }

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    Component.Layout = Component.Layout || GreenLayout;
    return (
      <Container>
        <Component.Layout title={Component.Title}>
          <Component {...pageProps} />
        </Component.Layout>
      </Container>
    );
  }
}

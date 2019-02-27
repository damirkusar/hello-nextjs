import Layout from "../components/DefaultLayout.js";
import { withRouter } from "next/router";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Markdown from "react-markdown";

const Content = withRouter(props => (
  <>
    <h1>{props.Id}</h1>
    <p>This is the blog post content.</p>
  </>
));

const Post = withRouter(props => {
  // this.Title = props.router.query.title;
  //   props.Title = "hello damir";

  return (
    <>
      <Head>
        <title>Hello {props.blog.id}, dk</title>
      </Head>
      <h1>Hello {props.blog.id}</h1>

      <div className="markdown">
        <Markdown
          source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

## This is a title

And here's the content.
     `}
        />
      </div>

      <h1>{props.show.name}</h1>
      <p>{props.userAgent}</p>
      <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
      <img src={props.show.image.medium} />

      <style jsx global>{`
        .markdown {
          font-family: "Arial";
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
});

// class Post extends React.Component {
//   //   static async getInitialProps({ req, query }) {
//   //     const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
//   //     const Title = query.title;
//   //     return { userAgent, Title };
//   //   }

//   render() {
//     return (
//       <>
//         <Head>
//           <title>{this.props.Title}</title>
//         </Head>
//         <Content />
//       </>
//     );
//   }
// }

Post.getInitialProps = async context => {
  const { id, title } = context.query;
  const userAgent = context.req
    ? context.req.headers["user-agent"]
    : navigator.userAgent;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  const blog = { id, title };
  return { userAgent, blog, show };
};

// Post.Title = "Hello from Post test";
Post.Layout = Layout;
export default Post;

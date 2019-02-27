import Layout from "../components/DefaultLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

// const Index = () => {
//   // <Layout title="Welcome to Next.js">
//   return <p>Hello Next.js</p>;
//   // </Layout>
// };

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ];
}

const PostLink = ({ show }) => (
  <>
    <li key={show.id}>
      <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
        <a>{show.name.replace(/(Batman)/g, "Axpo")}</a>
      </Link>
    </li>
    {/* <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style> */}
  </>
);

const Index = props => (
  <>
    <h1>Axpo Titles</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <PostLink key={show.id} show={show} />
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

Index.Title = "Hello from Index";
// Index.Layout = Layout;
export default Index;

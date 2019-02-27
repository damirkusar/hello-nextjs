import Layout from "../components/DefaultLayout.js";
import PostLink from "../components/PostLink";

const Blog = () => {
  return (
    <>
      <h1>Hello from Blog</h1>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
    </>
  );
};

Blog.Title = "Hello from Blog";
Blog.Layout = Layout;
export default Blog;

// import Layout from "../components/DefaultLayout";
// import Link from "next/link";

// const PostLink = props => (
//   <li>
//     <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

// export default () => (
//   <Layout>
//     <h1>My Blog</h1>
//     <ul>
//       <PostLink id="hello-nextjs" title="Hello Next.js" />
//       <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
//       <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
//     </ul>
//   </Layout>
// );

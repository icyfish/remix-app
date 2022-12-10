import { useLoaderData, Link } from "@remix-run/react";

export const loader = () => {
  const data = {
    posts: [
      {
        id: 1,
        title: "Post1",
        body: "This is Post1",
      },
      {
        id: 2,
        title: "Post2",
        body: "This is Post2",
      },
      {
        id: 3,
        title: "Post3",
        body: "This is Post3",
      },
    ],
  };
  return data;
};

function PostItems() {
  const { posts } = useLoaderData();
  return (
    <>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="/posts/new" className="btn">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostItems;

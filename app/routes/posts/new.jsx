import { Link, Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");

  const fields = { title, body };
  console.log(fields);

//   return redirect("/posts");
};

function NewPost() {
  return (
    <>
      <div className="page-header">
        <h1>New Post </h1>
        <Link to="/posts" className="btn btn-reverse">
          Back
        </Link>
      </div>
      <div className="page-content">
        <Form method="POST">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="body">Post Body</label>
            <textarea name="body" id="body" />
          </div>
          <button type="submit" className="btn btn-block">
            Add Post
          </button>
        </Form>
      </div>
    </>
  );
}


export default NewPost;

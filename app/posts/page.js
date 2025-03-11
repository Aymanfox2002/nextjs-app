import Link from "next/link";
import Todo from "../components/todo";

export const metadata = {
  title: "posts",
};

export default async function Page() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  let posts = await response.json();
  let postsJSX = posts.map((ele, i) => {
    return (
      <Link
        key={i}
        href={`/posts/${ele.id}`}
        style={{
          width: "70%",
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            margin: "10px",
            padding: "10px",
            color: "#f9f9f9",
            backgroundColor: "#333",
          }}
        >
          <h2>{ele.title}</h2>
          <p>{ele.body}</p>
        </div>
      </Link>
    );
  });
  console.log(posts);
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>posts page</h1>
      {postsJSX}
    </div>
  );
}

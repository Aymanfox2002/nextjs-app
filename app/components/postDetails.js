export default async function PostDetails({postId}) {
  
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        next: {
          revalidate: 120,
        },
      }
    );
    let post = await response.json();
    console.log(post);
    return (
      <div>
        <div
          style={{
            backgroundColor: "#333",
            color: "#fff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
    );
  }
  
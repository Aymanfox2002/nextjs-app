import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function postDetailspage({ params }) {
  const { postId } = await params;

    const loading = (<h2>Just wait...</h2>)
  return (
    <div>
      <h1>post </h1>
      <Suspense fallback={loading}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}

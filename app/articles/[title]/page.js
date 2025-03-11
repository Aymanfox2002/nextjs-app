export default async function ShowArticlePage({ params }) {
  const { title } = await params;
  return (
    <div>
      <h3>Dynamic Articles</h3>
      <h4>{title}</h4>
    </div>
  );
}

export const metadata = {
    title: 'Articles'
  }

export default async function({children}) {

    return (
        <div>
            <h1>Articles</h1>
            <h2 style={{ color: 'gray', fontSize: '1.5em' }}>
                {children}
            </h2>
        </div>
    );
}
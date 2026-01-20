import useFetch from './hooks/useFetch';

export default function App() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {data.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
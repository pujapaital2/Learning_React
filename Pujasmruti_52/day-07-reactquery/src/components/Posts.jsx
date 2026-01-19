import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchPosts = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return res.data
}

function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })

  if (isLoading) return <h3>Loading...</h3>
  if (error) return <h3>Error loading data</h3>

  return (
    <div>
      <h2>Posts List</h2>
      {data.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}

export default Posts

import {useState, useEffect} from 'react';
import axios from 'axios';
//https://jsonplaceholder.typicode.com/posts
const DataFetching = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res)
      setPosts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
    return (
        <div>
            <ul>
            {posts.map(post => {
              return <li key={post.id}>{post.title}</li>
            })}
            </ul>   
        </div>
    )
}

export default DataFetching

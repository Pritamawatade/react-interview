import { useEffect, useState } from 'react'
import './App.css'

interface post {
  userId: number,
  id: number,
  title: string,
  body: string,
}
function App() {
  const [post, setPost] = useState<post[]>([]);


  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts/')
  //   .then(response => response.json())
  //   .then(data => setPost(data))
  //   .catch((error) => console.log(`got error while fetching post ${error}`))
  // }, [])

  useEffect(() => {
    async function loadPost() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const posts = await data.json();
        setPost(posts);
      } catch (error) {
        console.log(`got error while fetching post ${error}`)
      }
    }

    loadPost()
  }, [])
  return (
    <>
      {
        post.length > 0 ? (
          post.map((p) =>
            <div key={p.id} className='max-w-96 p-20 m-20'>
              <p>{p.id}</p>
              <p className='text-center max-w-32'>{p.title}</p>
              <p className='text-center max-w-32 text-red-300'>{p.body}</p>
            </div>
          )
        ) : (
          <div>No posts available</div>
        )
      }
    </>
  )
}

export default App

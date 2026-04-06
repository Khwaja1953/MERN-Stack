import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [comments, setComments] = useState();
  const [postComment, setPostComment] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token,setToken] = useState();
  const [message, setMessage] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("token")|| "")
    fetch(`http://localhost:5000/blog/readBlog/${id}`)
      .then(res => res.json())
      .then(res => { console.log(res);
        setBlog(res.blog);
        setComments(res.comments);
        console.log(comments);
        setLoading(false);
       })
      .catch(err => { console.log(err);
        setError(true);
       })
  }, [message]);
  const handleComment = (e)=>{
    e.preventDefault();
    console.log("default prevented")
    fetch(`http://localhost:5000/blog/comments/${id}`,{
      method: "post",
      headers: token ? {
                Authorization: token,
                "Content-Type":"application/json"
            }: {},
            body: JSON.stringify({comment: postComment})
    }).then(res=>res.json())
    .then(res => {console.log(res); setPostComment("");setMessage(res.message)})
    .catch(err=>{console.log(err)})
    
  }
  return (
    <div>
      {error ? <div>Something went wrong please try again later</div>:<div>
      {loading ? <div>Loading......</div> : <div>

        <div>
          <img src={`http://localhost:5000${blog.image}`} alt="error" />
          <h2 className='text-4xl'>{blog.title}</h2>
          <pre>{blog.body}</pre>
         <p>{blog.createdBy.name}</p>
          <p>{blog.createdAt}</p>
        </div>
        <div>
          <h1 className='text-5xl border-t-2 pt-5 mt-5'>Comments</h1>
          {comments.length == 0 || !comments ? <div>No comments for this post</div>:<div>
            
            {
              comments.map((comment,i)=>(
                <div key={i} className='border m-2 p-2'>
                  <pre>{comment.comment}</pre>
                  <p>By: {comment.userId.name} At: <span>{comment.createdAt}</span></p>
                </div>
              ))
            }
            </div>}
            {token.startsWith("Bearer")&& <form onSubmit={(e)=>{handleComment(e)}}>
              <label htmlFor="comment">Post Your comment</label><br />
              <textarea className='border rounded' name="comment" id="comment" value={postComment} onChange={(e)=>{setPostComment(e.target.value)}}></textarea>
              <button>submit</button>
              </form>}
        </div>

      </div>}
        </div>}
    </div>
  )
}

export default Blog
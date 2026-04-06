import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [comments, setComments] = useState();
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchBlog = () => {
    fetch(`http://localhost:5000/blog/readBlog/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setBlog(res.blog);
        setComments(res.comments);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      })
  }

  useEffect(() => {
    fetchBlog();
  }, [id])

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    fetch(`http://localhost:5000/blog/comments/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ comment: commentText })
    })
      .then(res => res.json())
      .then(res => {
        setCommentText("");
        // After redirect, the response will be the updated blog data
        if (res.comments) {
          setComments(res.comments);
        } else {
            // Fallback: refetch if the redirect response doesn't match expected JSON
            fetchBlog();
        }
      })
      .catch(err => {
        console.log("Error posting comment:", err);
      });
  }

  return (
    <div className='max-w-4xl mx-auto p-4'>
      {error ? <div className='text-red-500'>Something went wrong please try again later</div> : <div>
        {loading ? <div>Loading......</div> : <div>

          <div className='mb-8'>
            <img src={`http://localhost:5000${blog.image}`} alt="blog" className='w-full h-auto rounded-lg mb-4' />
            <h2 className='text-4xl font-bold mb-4'>{blog.title}</h2>
            <pre className='whitespace-pre-wrap font-sans mb-4'>{blog.body}</pre>
            <div className='text-gray-600'>
              <p>By: {blog.createdBy?.name || "Unknown"}</p>
              <p>{new Date(blog.createdAt).toLocaleDateString()}</p>
            </div>
          </div>

          <div className='mt-10'>
            <h1 className='text-3xl font-bold border-t-2 pt-5 mb-5'>Comments ({comments?.length || 0})</h1>

            {token ? (
              <form onSubmit={handleCommentSubmit} className='mb-8'>
                <textarea
                  className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Add a comment...'
                  rows="3"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  required
                ></textarea>
                <button
                  type='submit'
                  className='mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  Post Comment
                </button>
              </form>
            ) : (
              <p className='mb-8 text-gray-600 italic'>Please <Link to="/login" className='text-blue-600 hover:underline'>login</Link> to add a comment.</p>
            )}

            {!comments || comments.length === 0 ? <div className='text-gray-500 italic'>No comments for this post. Be the first to comment!</div> : <div>
              {
                comments.slice().reverse().map((comment, i) => (
                  <div key={i} className='border-b py-4'>
                    <pre className='whitespace-pre-wrap font-sans text-gray-800'>{comment.comment}</pre>
                    <div className='flex justify-between items-center mt-2 text-sm text-gray-500'>
                      <p>By: <span className='font-semibold'>{comment.userId?.name || "Unknown User"}</span></p>
                      <p>{new Date(comment.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                ))
              }
            </div>}
          </div>

        </div>}
      </div>}
    </div>
  )
}

export default Blog

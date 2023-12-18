"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostDetails = () => {
  const [post, setPost] = useState(null);

  const fetchRandomPost = async () => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const randomIndex = Math.floor(Math.random() * data.length);
      setPost(data[randomIndex]);
    } catch (error) {
      console.error('Error fetching random post details:', error);
    }
  };

  useEffect(() => {
    fetchRandomPost();
  }, []); // Fetch random post on component mount

  return (
    <div style={{ backgroundColor: 'aliceblue', height: '100vh', margin: 'auto' }}>
      {post ? (
        <>
          <h2 style={{margin: 'auto'}}>Post Details</h2>
          <p><strong>User ID:</strong> {post.userId}</p>
          <p><strong>Post ID:</strong> {post.id}</p>
          <p><strong>Title:</strong> {post.title}</p>
          <p><strong>Body:</strong> {post.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
};

export default PostDetails;

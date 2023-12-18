"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
    <div  style={{ backgroundColor: 'white', height: '100vh', margin:"auto" }}>
      <h2 style={{marginTop : "0px"}}>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
             {post.title}
                         </Link>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: Math.ceil(posts.length / 10) }, (_, index) => (
          <button key={index + 1} onClick={() => console.log(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    </>
  );
};

export default PostsPage;


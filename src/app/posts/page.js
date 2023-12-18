"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div style={{ backgroundColor: 'rgb(191 191 191)', height: '100vh', fontSize: '22px', margin: 'auto', padding: '20px' }}>
        <h2 style={{ marginTop: '0px' }}>Posts</h2>
        <ul>
          {currentPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostsPage;

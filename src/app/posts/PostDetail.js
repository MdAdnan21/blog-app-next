// PostDetails.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUser } from '../reducers/UserSlice';
import UserDisplay from './UserDisplay';
import axios from 'axios';

const PostDetails = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.find((p) => p.id === Number(postId)));

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        dispatch(setUser(response.data));
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    if (!isNaN(postId)) {
      fetchPostDetails();
    }
  }, [dispatch, postId]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Post Details</h2>
      <UserDisplay user={post} />
    </div>
  );
};

export default PostDetails;

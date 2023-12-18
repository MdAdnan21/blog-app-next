import axios from 'axios';
import { setPosts, setPost } from '../redux/postSlice';

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPosts(response.data));
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

export const fetchPostDetails = (postId) => async (dispatch) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    dispatch(setPost({ id: postId, data: response.data }));
  } catch (error) {
    console.error('Error fetching post details:', error);
  }
};

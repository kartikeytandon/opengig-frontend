import axios from 'axios';

const API_URL = 'https://opengig-backend.onrender.com/api/posts';

export const fetchRootPosts = async (page = 1, limit = 10) => {
  const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
  return response.data;
};

export const fetchComments = async (postId, page = 1, limit = 5) => {
  const response = await axios.get(`${API_URL}/${postId}/comments?page=${page}&limit=${limit}`);
  return response.data;
};

export const createPost = async (content, parent = null) => {
  const response = await axios.post(API_URL, { content, parent });
  return response.data;
};

export const likeDislikePost = async (postId, action) => {
  const response = await axios.post(`${API_URL}/${postId}/like-dislike`, { action });
  return response.data;
};
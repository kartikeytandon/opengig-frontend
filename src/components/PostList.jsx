import React, { useEffect, useState } from 'react';
import { fetchRootPosts } from '../api/postApi';
import CommentList from './CommentList';
import PostForm from './PostForm';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchRootPosts(page);
      setPosts((prevPosts) => [...prevPosts, ...data]);
    };
    loadPosts();
  }, [page]);

  const handleLoadMore = () => setPage(page + 1);

  const handlePostCreated = (newPost) => setPosts([newPost, ...posts]);

  return (
    <div>
      <PostForm onPostCreated={handlePostCreated} />
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <CommentList post={post} />
          </li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default PostList;
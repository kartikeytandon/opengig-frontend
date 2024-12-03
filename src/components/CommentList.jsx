import React, { useEffect, useState } from 'react';
import { fetchComments, likeDislikePost } from '../api/postApi';
import PostForm from './PostForm';

const CommentList = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadComments = async () => {
      const data = await fetchComments(post._id, page);
      setComments((prevComments) => [...prevComments, ...data]);
    };
    loadComments();
  }, [post._id, page]);

  const handleLoadMore = () => setPage(page + 1);

  const handlePostCreated = (newComment) => setComments([newComment, ...comments]);

  const handleLike = async () => {
    const updatedPost = await likeDislikePost(post._id, 'like');
    post.likes = updatedPost.likes; 
  };

  return (
    <div>
      <h3>{post.content}</h3>
      <button onClick={handleLike}>Like {post.likes}</button>
      <PostForm parent={post._id} onPostCreated={handlePostCreated} />
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <CommentList post={comment} />
          </li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load More Comments</button>
    </div>
  );
};

export default CommentList;
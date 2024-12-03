import React, { useState } from 'react';
import { createPost } from '../api/postApi';

const PostForm = ({ parent, onPostCreated }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newPost = await createPost(content, parent);
    setContent('');
    onPostCreated(newPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post..."
        rows="3"
        style={{ width: '100%' }}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
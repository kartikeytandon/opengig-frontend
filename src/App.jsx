import React from 'react';
import PostList from './components/PostList';

const App = () => {
  return (
    <div>
      <h1>Nested Post System</h1>
      <h2>API is deployed on Render, so it is a bit slow! Please bare...</h2>
      <PostList />
    </div>
  );
};

export default App;
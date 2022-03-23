import React from 'react'
import PostCreate from './PostCreate'
import './bootstrap.min.css'
import './index.css'
import Header from './Header'
import PostList from './PostList'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Create Post</h1>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostList />
      </div>
    </>
  )
}
export default App

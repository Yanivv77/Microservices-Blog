import React from 'react'
import PostCreate from './PostCreate'
import './bootstrap.min.css'
import './index.css'
import Header from './Header'

const App = () => {
  return (
    <>
      <Header />
      <div className="container ">
        <h1>Create Post</h1>
        <PostCreate />
      </div>
    </>
  )
}
export default App

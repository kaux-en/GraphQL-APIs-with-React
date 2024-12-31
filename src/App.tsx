import React from 'react';
import './App.css';
import GetPosts from './components/GET_POSTS.tsx';
import { Routes, Route } from 'react-router-dom';
import GetUserPosts from './components/GET_USER-POST.tsx';
import CreatePost from './components/CREATE_POST.tsx';
import UpdatePost from './components/UPDATE_POST.tsx';
import DeletePost from './components/DELETE_POST.tsx';

function App() {
  return (
    <div className="App">
      <CreatePost />
      <Routes>
      <Route path='/' element={<GetPosts />} />
      <Route path='/:id' element={<GetUserPosts />} />
      <Route path='/UpdatePost' element={<UpdatePost />} />
      <Route path='/DeletePost' element={<DeletePost />} />
      </Routes>
    </div>
  );
}

export default App;

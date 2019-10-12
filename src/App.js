import React from 'react';
import './App.css';
import CourseInfo from './courseinfo/CourseInfo';
import Anecdotes from './anecdotes/Anecdotes';
import { BrowserRouter, Route } from "react-router-dom";
import UniCafe from './unicafe/UniCafe';

const App = () => {
  return (
    <div className="app">
      <a href="/CourseInfo">Course Info</a><br />
      <a href="/UniCafe">Uni Cafe</a><br />
      <a href="/Anecdotes">Anecdotes</a><br />
      <BrowserRouter>
        <Route path="/CourseInfo" component={CourseInfo} />
        <Route path="/UniCafe" component={UniCafe} />
        <Route path="/Anecdotes" component={Anecdotes} />
      </BrowserRouter>
    </div>
  );
};

export default App;

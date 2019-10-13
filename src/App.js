import React from 'react';
import './App.css';
import CourseInfo from './courseinfo';
import Anecdotes from './anecdotes/Anecdotes';
import { BrowserRouter, Route } from "react-router-dom";
import UniCafe from './unicafe/UniCafe';
import Phonebook from './phonebook';
import Countries from './countries';

const App = () => {
  return (
    <div className="app">
      <a href="/CourseInfo">Course Info</a><br/>
      <a href="/UniCafe">Uni Cafe</a><br/>
      <a href="/Anecdotes">Anecdotes</a><br/>
      <a href="/Phonebook">Phonebook</a><br/>
      <a href="/Countries">Countries</a>
      <BrowserRouter>
        <Route path="/CourseInfo" component={CourseInfo} />
        <Route path="/UniCafe" component={UniCafe} />
        <Route path="/Anecdotes" component={Anecdotes} />
        <Route path="/Phonebook" component={Phonebook} />
        <Route path="/Countries" component={Countries} />
      </BrowserRouter>
    </div>
  );
};

export default App;

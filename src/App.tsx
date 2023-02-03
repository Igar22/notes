import Header from "./components/Header";
import './App.css'
import SearchNote from "./components/SearchNote";
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import React from "react";
import NotesGrid from "./components/NotesGrid";


const App = () => {

  return (
    <div className="container">
      <Header />
      <SearchNote />
      <NotesGrid />
    </div>
  );
}

export default App;

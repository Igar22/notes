import React from 'react';
import Note from './Note';
import CreateNote from './CreateNote';

const NotesGrid = () => {
  return (
    <div className='notes-grid'>
      <Note />
      <Note />
      <Note />
      <Note />
      <CreateNote />
    </div>
  );
};

export default NotesGrid;
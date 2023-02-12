import React from 'react';

const CreateNote: React.FC = ({  }) => {
  const [noteText, setNoteText] = React.useState('')
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(event.target.value)
    console.log(event.target.value)
  }

  const handleAddClick = () => {
    if(noteText.trim().length > 0){
      addNote(noteText)
      setNoteText('')
    }
  }
  
  return (
    <div className='create-note'>
      <div className='create-note-text'>
          <textarea 
            id='text' value={noteText} 
            placeholder='Type...'
            name='text' maxLength = {200}
            onChange={onChange} />
      </div> 
      <div className='note-save'>
        <button className='save-button' style={{float: 'right'}}
        onClick={handleAddClick}>+</button>
      </div>
      
    </div>
  );
};

export default CreateNote;


function addNote(noteText: string) {
  throw new Error('Function not implemented.');
}

import { MdDeleteForever, MdEdit } from 'react-icons/md'


const Note = () => {
  return (
    <div className='note'>
      <span>{}</span>
      <div className='note-footer'>
        <MdEdit className='edit-icon' size={30} />
        <MdDeleteForever className='delete-icon' size={30} />
      </div>
    </div>
  );
};

export default Note;
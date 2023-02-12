import {MdSearch} from 'react-icons/md'
import React from 'react';

const SearchNote = () => {
  return (
    <div className='search'>
      <div className='search-text'>
        <MdSearch className='search-icon' size={30}/>
        <textarea 
          id='text' value={''} 
          placeholder='Type...'
          name='text' maxLength = {50}
            />
      </div> 
    </div>
  );
};

export default SearchNote;
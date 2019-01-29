import React from 'react';
import './List.css';

function List(props){
  const bookmarksList = props.bookmarks.map((bookmarks) =>
    <div className='singleBookmarks' key={bookmarks.id}>
      <h3>{bookmarks.title}</h3>
      <p>
        <a href={bookmarks.link} target="_blank" rel="noopener noreferrer">{bookmarks.link}</a>
      </p>
      <ul className='Tags'>
        <li>{bookmarks.tags} <span className='remove-icon' onClick={() => (console.log('Excluir'))}></span></li>
      </ul>
    </div>
  );
  return (
    <div className='Bookmarks'>
      {bookmarksList}
    </div>
  );
}
  
export default List;
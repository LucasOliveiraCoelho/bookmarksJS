import React from 'react';
import './List.css';

function List(props){
  const content = props.bookmarks.map((bookmarks) =>
    <div key={bookmarks.id}>
      <h3>{bookmarks.title}</h3>
      <p>{bookmarks.link}</p>
      <ul className='Tags'>
        <li>{bookmarks.tags}</li>
      </ul>
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}
  
export default List;
import React from 'react';
import './static/css/List.css';
import {Col, Row,} from 'reactstrap'
import Trash from './static/images/Trash.svg'

function List(props){
	const bookmarksList = props.bookmarks.map((bookmarks,i) =>
		(bookmarks.title === '' && bookmarks.link === '') ?
		(
			<div className='notFound' key={i}>
				Not found.
			</div>
		) :
		(
		<div className='singleBookmarks' key={i} id={i}>
			<Row>
				<Col xs='10'>
					<h3>{bookmarks.title}</h3>
					<p>
						<a href={bookmarks.link} target='_blank' rel='noopener noreferrer'>
							{bookmarks.link}
						</a>
					</p>
					<ul className='Tags'>
						{
							bookmarks.tags.map((val, index) => 
								<li data={val} indextag={[index]} key={index}>
									{val}
									<span className='remove-icon' onClick={() => props.removeTag(i,index) } >
									</span>
								</li> 
							)
						}
					</ul>
				</Col>
				<Col xs='2' id='deleteColumn'>
					<p className='deleteBookmarks' id={bookmarks.id} onClick={() => props.removeBookmarks(i)}>
						<img src={Trash} alt='Add' />
						DELETE
					</p>
				</Col>
			</Row>
		</div>
		)

		
  )
  return (
    <div className='Bookmarks'>
      {bookmarksList}
    </div>
  );
}

export default List;
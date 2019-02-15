import React from 'react'
import AddGray from './static/images/AddGray.svg'
import Search from './static/images/Search.svg'

function SearchMenu(props){
    const alterMenuValue = 1
    return(
        <form onSubmit={props.submit}>
            <img onClick={() => props.alterMenu(alterMenuValue)} src={AddGray} alt='Add' />
            <img src={Search} alt='Search' />
            <input name='filterTag' type='text' value={props.value} onChange={props.filterTag} placeholder='Filter by tag'/>
            <input type='submit' style={{ display: 'none' }} />
        </form>
    )
}

export default SearchMenu
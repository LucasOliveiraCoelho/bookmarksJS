import React from 'react'
/* Images */
import SearchGray from './static/images/SearchGray.svg'
import Add from './static/images/Add.svg'

function AddMenu(props){
    const alterMenuValue = -1
    return(
        <form onSubmit={props.submit}>
            <img onClick={() => props.alterMenu(alterMenuValue)} src={SearchGray} alt='Search' />
            <img src={Add} alt='Add' />
            <input name='title' type='text' value={props.title} onChange={props.onChangeInput} placeholder='Title'/>
            <input name='link' type='text' value={props.link} onChange={props.onChangeInput} placeholder='Link'/>
            <input name='tags' type='text' value={props.tags} onChange={props.onChangeInput} placeholder='Tags'/>
            <input type='submit' style={{ display: 'none' }} />
        </form>
    )
}
export default AddMenu
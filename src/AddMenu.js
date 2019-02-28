import React from 'react'

function AddMenu(props){
    return(
        <form onSubmit={props.submit}>
            <input name='title' type='text' value={props.title} onChange={props.onChangeInput} placeholder='Title'/>
            <input name='link' type='text' value={props.link} onChange={props.onChangeInput} placeholder='Link'/>
            <input name='tags' type='text' value={props.tags} onChange={props.onChangeInput} placeholder='Tags'/>
            <input type='submit' style={{ display: 'none' }} />
        </form>
    )
}
export default AddMenu
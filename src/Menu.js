import React, {Component} from 'react'
import './Menu.css'

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {value: props.initialValue}
    }

    handleAlterMenu(e){
        this.setState({ value: this.state.value + e })
    }

    handleAddBookmarks(e){
        if (e.key === 'Enter') {
            /* Start validation */
            console.log('Start validation')
        }
    }

    render(){
        if(this.state.value === 1){
            return(
                <div role='form' className='Menu' id='Add'>
                    <img id='search' onClick={() => this.handleAlterMenu(-1)} src={require('./static/images/SearchGray.svg')} alt='Search' />
                    <img id='add' src={require('./static/images/Add.svg')} alt='Add' />
                    <input id='title' onKeyPress={this.handleAddBookmarks} placeholder='Title'/>
                    <input id='link' onKeyPress={this.handleAddBookmarks} placeholder='Link'/>
                    <input id='tags' onKeyPress={this.handleAddBookmarks} placeholder='Tags'/>
                </div>
            );
        }else{
            return(
                <div className='Menu' id='Search'>
                    <img id='add' onClick={() => this.handleAlterMenu(1)} src={require('./static/images/AddGray.svg')} alt='Add' />
                    <img id='search' src={require('./static/images/Search.svg')} alt='Search' />
                    <input placeholder='Filter by Tag'></input>
                </div>
            )
        }

    }
}

export default Menu
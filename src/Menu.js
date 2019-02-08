import React, {Component} from 'react'
import './static/css/Menu.css'
import SearchGray from './static/images/SearchGray.svg'
import Add from './static/images/Add.svg'
import AddGray from './static/images/AddGray.svg'
import Search from './static/images/Search.svg'

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: props.initialValue,
            title:'',
            link:'',
            tags:'',
            filterTag: ''
        }
    }
    
    handleAlterMenu = e => {
        this.setState({ value: this.state.value + e })
    }

    handleSubmit = e => {
        e.preventDefault()
        // Create array for split string and remove value != string, example space. 
        let tagsArg = (this.state.tags.split(' ')).filter(String)

        let tagsArgUpper = tagsArg.map(function(textTag) {
            return textTag.toUpperCase();
        })

        let allTags = [ ...new Set(tagsArgUpper) ]

        let linkHttp = this.state.link

        // Add http in url
        // TO DO - Validate if have https//
        if (!this.state.link.match('^http://')){
            linkHttp = 'http://' + this.state.link
        }

        // Validation empty value
        if(this.state.title === '' || this.state.link === '' || this.state.tags === '' ){
            alert('Por favor preencha todos os campos')
        }

        else{
            // title: 'Teste 1', link: 'http://www.teste.com.br', tags: ['teste2','testando2','testado2','testadoxxxx2']
            let Bookmarksobj = {
                title: this.state.title,
                link: linkHttp,
                tags: allTags
            }
            //Clear state form
            this.setState({
                title: '',
                link: '',
                tags: '',
            });
            this.props.addBookmarks(Bookmarksobj);
        }
    }

    handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        });
    }

    // TODO
    // Criar outro array para salvar o estado anterior antes do filtro, e passar o valor dos campos que
    // passam pela condição no novo array, caso nenhuma
    handleChangeFilter = e => {
        const name = e.target.name
        const value = e.target.value.toUpperCase()
        this.setState({
            [name]: value
        })
        this.props.filterBookmarks(value)
    }
    handleSearchSubmit = e => {
        e.preventDefault()
    }

    render(){
        const initialMenuValue = 1
        if(this.state.value === initialMenuValue){
            return(
                <div role='form' className='Menu' id='Add'>
                    <img id='search' onClick={() => this.handleAlterMenu(-1)} src={SearchGray} alt='Search' />
                    <img id='add' src={Add} alt='Add' />
                    
                    <form onSubmit={this.handleSubmit}>
                        <input name='title' type='text' value={this.state.title} onChange={this.handleChange} placeholder='Title'/>
                        <input name='link' type='text' value={this.state.link} onChange={this.handleChange} placeholder='Link'/>
                        <input name='tags' type='text' value={this.state.tags} onChange={this.handleChange} placeholder='Tags'/>
                        <input type='submit' style={{ display: 'none' }} />
                    </form>
                </div>
            );
        } else {
            return(
                <div className='Menu' id='Search'>
                    <img id='add' onClick={() => this.handleAlterMenu(1)} src={AddGray} alt='Add' />
                    <img id='search' src={Search} alt='Search' />
                    <form onSubmit={this.handleSearchSubmit}>
                        <input name='filterTag' type='text' value={this.state.filterTag} onChange={this.handleChangeFilter} placeholder='Filter by tag'/>
                        <input type='submit' style={{ display: 'none' }} />
                    </form>
                </div>
            )
        }

    }
}

export default Menu
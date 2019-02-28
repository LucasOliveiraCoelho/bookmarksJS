import React, {Component} from 'react'
import Add from './AddMenu.js'
import Search from './SearchMenu.js'
import './static/css/Menu.css'

/* Images Search menu */
import addGray from './static/images/AddGray.svg'
import search from './static/images/Search.svg'

/* Images Add menu */
import searchGray from './static/images/SearchGray.svg'
import add from './static/images/Add.svg'

export const FORMS = {
    ADD: 1,
    FILTER: 0
}

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedMenu: FORMS.ADD,
            title:'',
            link:'',
            tags:'',
            filterTag:''
        }
    }
    
    handleAlterMenu = selectedMenu => {
        this.setState({
            selectedMenu,
            title:'',
            link:'',
            tags:'',
            filterTag:''
        })
        this.props.filterBookmarks()
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
        if (!this.state.link.match('^https://')){
            linkHttp = 'http://' + this.state.link
        }
        if (!this.state.link.match('^http://')){
        }else if(!this.state.link.match('^http://')){
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
            // Clear state form
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

    handleChangeFilter = e => {
        const value = e.target.value.toUpperCase()
        this.setState({
            filterTag: value
        })
        this.props.filterBookmarks(value)
    }

    handleSearchSubmit = e => {
        e.preventDefault()
    }

    render(){

        if (this.state.selectedMenu === FORMS.ADD){
            return(
                <div role='form' className='Menu Add'>
                    <img onClick={() => this.handleAlterMenu(FORMS.FILTER)} src={searchGray} alt='Search' />
                    <img src={add} alt='Add' />
                    
                    <Add 
                        onChangeInput = {this.handleChange}
                        submit = {this.handleSubmit}
                        title = {this.state.title}
                        link = {this.state.link}
                        tags = {this.state.tags}
                    />
                </div>
            );
        } else {
            return(
                <div role='form' className='Menu Search'>
                    <img onClick={() => this.handleAlterMenu(FORMS.ADD)} src={addGray} alt='Add' />
                    <img src={search} alt='Search' />

                    <Search
                        submit = {this.handleSearchSubmit}
                        value = {this.state.filterTag}
                        filterTag = {this.handleChangeFilter}
                    />
                </div>
            )
        }
    }
}

export default Menu
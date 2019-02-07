import React, {Component} from 'react'
import './Menu.css'

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: props.initialValue,
            title:'',
            link:'',
            tags:'',
            filterTag:''
        }
    }
    
    handleAlterMenu(e){
        this.setState({ value: this.state.value + e })
    }

    handleSubmit = e => {
        e.preventDefault()
        // Create array for split string
        let tagsArg = this.state.tags.split(' ')

        let tagsArgUpper = tagsArg.map(function(textTag) {
            return textTag.toUpperCase();
        })

        //Validation empty value
        if(this.state.title === '' || this.state.link === '' || this.state.tags === '' ){
            alert('Por favor preencha todos os campos')
        }
        else{
            //title: 'Teste 1', link: 'http://www.teste.com.br', tags: ['teste2','testando2','testado2','testadoxxxx2']
            let linkHttp = 'http://' + this.state.link
            let Bookmarksobj = {
                title: this.state.title,
                link: linkHttp,
                tags: tagsArgUpper
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

    render(){
        const initialMenuValue = 1
        if(this.state.value === initialMenuValue){
            return(
                <div role='form' className='Menu' id='Add'>
                    <img id='search' onClick={() => this.handleAlterMenu(-1)} src={require('./static/images/SearchGray.svg')} alt='Search' />
                    <img id='add' src={require('./static/images/Add.svg')} alt='Add' />
                    
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
                    <img id='add' onClick={() => this.handleAlterMenu(1)} src={require('./static/images/AddGray.svg')} alt='Add' />
                    <img id='search' src={require('./static/images/Search.svg')} alt='Search' />
                    <form>
                        <input name='filterTag' type='text' value={this.state.filterTag} onChange={this.handleChangeFilter} placeholder='Filter by tag'/>
                        <input type='submit' style={{ display: 'none' }} />
                    </form>
                </div>
            )
        }

    }
}

export default Menu
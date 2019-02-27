import React, {Component} from 'react'
import {createStore} from 'redux'

const initalState =[
        {
            "titulo": "United State"
        },
        {
            "titulo": "Colombia"
        },
        {
            "titulo": "Cuba"
        },
        {
            "titulo": "Brasil"
        }
    ]

export default class Main extends Component{
    

    constructor(props){
        super(props)
        const store = createStore(
            (state) => state,
            initalState,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    }
    componentDidMount(){
        const $form = document.getElementById('busqueda')
        $form.addEventListener("submit", this.handleSubmit)
    }

    handleSubmit = event =>{
        const $form = document.getElementById('busqueda')
        event.preventDefault();
        const objetoForm = new FormData($form)
        const titulo = objetoForm.get('titulo')
        console.log(titulo)
    }

    render(){
        return(
            <div className="Main">
                <form id="busqueda">
                    <input type="text" name="titulo" placeholder="Búscar" />
                </form>
            </div>
        )
    }
}
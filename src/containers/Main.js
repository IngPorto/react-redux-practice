import React, {Component} from 'react'
import {createStore} from 'redux'

export default class Main extends Component{
    constructor(props){
        super(props)
        //
        this.initalState =[
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
        //
        this.reducer = (state, action) => {
            switch (action.type) {
                case 'AGREGAR_DATO':
                    return [...state, {'titulo': action.paylod.titulo}]
                    break;            
                default:
                    return state
                    break;
            }
        }
        //
        this.store = createStore(
            this.reducer,
            this.initalState,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
        console.log(this.store.getState())
    }
    componentDidMount(){
        const $form = document.getElementById('busqueda')
        $form.addEventListener("submit", this.handleSubmit)

        this.addDataToContainer()
        this.store.subscribe(()=>{this.addDataToContainer()})
    }

    addDataToContainer(){
        const $container = document.getElementById('container')
        $container.innerHTML = ""
        const data = this.store.getState();
        data.forEach(item =>{
            const fila = document.createElement('p')
            fila.innerText = item.titulo
            $container.appendChild(fila)
        })
    }

    handleSubmit = event =>{
        const $form = document.getElementById('busqueda')
        event.preventDefault();
        const objetoForm = new FormData($form)
        const titulo = objetoForm.get('titulo')
        this.store.dispatch({
            type:'AGREGAR_DATO',
            paylod: {
                titulo
            }
        })
        console.log(titulo)
    }

    render(){
        return(
            <div className="Main">
                <form id="busqueda">
                    <input type="text" name="titulo" placeholder="Búscar" />
                </form>
                <div id="container"></div>
            </div>
        )
    }
}
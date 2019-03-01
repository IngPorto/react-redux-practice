import React, {Component} from 'react'
import { connect } from 'react-redux';

class Main extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const $form = document.getElementById('busqueda')
        $form.addEventListener("submit", this.handleSubmit)

        this.addDataToContainer()
        this.subscribe(this.addDataToContainer)        
    }

    addDataToContainer(){
        const $container = document.getElementById('container')
        $container.innerHTML = ""
        const data = this.props.initalState
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
        this.props.dispatch({
            type:'AGREGAR_DATO',
            paylod: {
                titulo
            }
        })
        this.addDataToContainer()
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

function mapStateToProps(state, props){
    
    console.log(state)
    return {
        initalState: state.data
    }
}

export default connect(mapStateToProps)(Main)
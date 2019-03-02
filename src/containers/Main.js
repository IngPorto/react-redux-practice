import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const $form = document.getElementById('busqueda')
        $form.addEventListener("submit", this.handleSubmit)

        this.addDataToContainer()
        //this.subscribe(this.addDataToContainer)  
        //this.props.agregarDato()
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
        //console.log(this.props.dispatch)
        this.props.agregarDato(titulo)
        
        this.addDataToContainer()
        console.log(titulo)
    }

    render(){
        return(
            <div className="Main">
                <form id="busqueda" >
                    <input type="text" name="titulo" placeholder="Buscar" />
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

/*
const mapDispachToProps = {
    agregarDato : (titulo)=> {
        return ({
            type:'AGREGAR_DATO',
            paylod: {
                titulo
            }
        })
    },
}
*/

const agregarDato = (titulo) => ({type:'AGREGAR_DATO',paylod:{titulo}})

const mapDispachToProps = {
    agregarDato
}
export default connect(mapStateToProps, mapDispachToProps)(Main)
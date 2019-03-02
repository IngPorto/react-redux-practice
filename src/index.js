import React, {Component} from 'react'
import {render} from 'react-dom'
import Main from './containers/main'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import data from './api/data'

const reducer = (state, action) => {
    switch (action.type) {
        case 'AGREGAR_DATO':
            state.data.push({'titulo': action.paylod.titulo})
            return state
            //return [...state, {'titulo': action.paylod.titulo}]
            /*
            const tempState = state
            tempState.push({'titulo':action.paylod.titulo})
            return tempState
            */
            break;            
        default:
            return state
            break;
    }
}

const initialState = {
    data
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//console.log(store.getState())

render(
    <Provider store= {store}>
        <Main />
    </Provider>,
    document.getElementById('main')
)
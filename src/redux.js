const redux = require('redux');

const initialState = {
    counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {
    if(action.type === 'ADD') {
        return {
            counter: state.counter + action.value
        }
    }

    if(action.type === 'SUBTRACT') {
        return {
            counter: state.counter - 1
        }
    }


    return state;
}

// Store
const store = redux.createStore(reducer);

store.subscribe( ()=> {
    console.log('Subscribe', store.getState())
} )

// Actions
const addCounter = {
    type: 'ADD',
    value: 10
}

store.dispatch(addCounter);
store.dispatch({type: 'SUBTRACT'})
import {ADD, SUB, ADD_NUMBER,SUBTRACT_NUMBER, ADD2} from './actionTypes';

// action creators

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function addNumber(number) {
    return {
        type: ADD_NUMBER,
        value: number
    }
}

export function subNumber(number) {
    return {
        type: SUBTRACT_NUMBER,
        value: number
    }
}

export function add2(number) {
    return {
        type: ADD2,
        value: number
    }
}

export function asyncAdd(number) {
    return (dispatch) => {
        setTimeout( () => {
            dispatch(addNumber(number))
        },2000)
    }
    
}
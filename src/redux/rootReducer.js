import { combineReducers } from 'redux';

import counter1 from './reducers/counter1';
import counter2 from './reducers/counter2';

export default combineReducers({
    counter1: counter1,
    counter2: counter2
})

// const initialState = {
//   counter: 0
// };

// export default function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case "ADD":
//       return {
//         counter: state.counter + 1
//       };

//     case "SUBTRACT":
//       return {
//         counter: state.counter + 1
//       };

//     case "ADD_NUMBER":
//       return {
//         counter: state.counter + action.value
//       };

//     case "SUBTRACT_NUMBER":
//       return {
//         counter: state.counter - action.value
//       };

//     default:
//       break;
//   }

//   return state;
// }

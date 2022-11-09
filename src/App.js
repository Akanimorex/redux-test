import logo from './logo.svg';
import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import CakeContainer from './components/CakeContainer';
import { applyMiddleware } from '@reduxjs/toolkit';
import { ReduxLoggerOptions } from 'redux-logger';





const createStore = configureStore;


//action

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM"



const buyCake = () =>{
    return {
        type: BUY_CAKE,
        info:'First redux action'
    }
};

const buyIcecream =()=>{
  return{
    type:BUY_ICECREAM,
    info:"ice cream to be bought"
  }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams:20
// };

const initialCakeState = {
    numOfCakes: 10,
};

const initialIcecreamState ={
  numOfIceCreams:20

}


//reducer

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//           ...state,
//           numOfIceCreams:state.numOfIceCreams - 1
//         }
            
//         default: return state
//     }
// };

//split up

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
            
        default: return state
    }
};
const iceCreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
          ...state,
          numOfIceCreams:state.numOfIceCreams - 1
        }
            
        default: return state
    }
};

//store

const rootReducer = combineReducers({
  cake:cakeReducer,
  iceCreamReducer:iceCreamReducer
})

const store = configureStore({reducer:rootReducer}, applyMiddleware(ReduxLoggerOptions));
console.log(store.getState(),"getting initial state");
 const unsubscribe = store.subscribe(()=>{console.log(store.getState(),"getting updated state")});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CakeContainer/>
      </header>
    </div>
  );
}

export default App;

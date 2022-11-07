import logo from './logo.svg';
import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import CakeContainer from './components/CakeContainer';





const createStore = configureStore;


//action

const BUY_CAKE = "BUY_CAKE";



const buyCake = () =>{
    return {
        type: BUY_CAKE,
        info:'First redux action'
    }
}

const initialState = {
    numOfCakes: 10
};


//reducer

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
            
        default: return state
    }
};

//store

const store = configureStore({reducer:counterReducer});
console.log(store.getState(),"getting initial state");
 const unsubscribe = store.subscribe(()=> console.log(store.getState(), "getting updated state"));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
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

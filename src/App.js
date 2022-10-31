import logo from './logo.svg';
import './App.css';
import { configureStore } from '@reduxjs/toolkit';





const createStore = configureStore;

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

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            numOfCakes: initialState.numOfCakes - 1
        }
            
        default: return state
    }
};

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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Counter from './container/Counter';
import './App.css'

const App = () => {
  return (
    <div >
    <Provider store={store} >
      <div className='App'>
        <h1>Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
//the glue that puts react and react redux together
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import Postform from './components/Postform';
import store from './store';

function App() {
  return (
    //store holds the state
    <Provider store={store}>
    <div className="App">
            <Postform />
      <Posts />
    </div>
    </Provider>
  );
}

export default App;

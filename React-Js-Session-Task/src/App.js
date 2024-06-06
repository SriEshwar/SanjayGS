
import React from 'react';
import Hello from './Hello';
import './App.css';
import Welcome from './welcome';
import Login from './Login';
import ConditionalRender from './ConditionalRender';
import Wishing from './Wishing';
import Counter from './Counter';

function App() {
  return (
    <>
      <Hello />
      <ConditionalRender/>
      <Login />
      <Wishing/>
      <Welcome name="Ram" />
      <Counter/>
    </>
  );
}

export default App;





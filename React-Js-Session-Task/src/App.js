
import React from 'react';
import Hello from './Hello';
import './App.css';
import Welcome from './welcome';
import Login from './Login';
import ConditionalRender from './ConditionalRender';
import Wishing from './Wishing';
import Counter from './Counter';
import LifecycleDemo from './LifecycleDemo';
import Increment from './Increment';
import CounteruseEffect from './CounteruseEffect';
import UseEffectAxios from './UseEffectAxios';

function App() {
  return (
    <>
      <Hello />
      <ConditionalRender/>
      <Increment/>
      <Login />
      <Wishing/>
      <Welcome name="Ram" />
      <hr/>
      <Counter/>
      <hr/>
      <CounteruseEffect/>
      <hr/>
      {/* <LifecycleDemo/> */}
      <UseEffectAxios/>

    </>
  );
}

export default App;





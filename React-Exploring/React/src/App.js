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
import ControlledFrom from './ControlledFrom';
import UnControlledForm from './UnControlledForm';
import MultiInputForm from './MultiInputForm';
import DynamicList from './DynamicList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Todo from './Todo';

import Register from './Register';
import LoginPage from './LoginPage';
import DatePage from './DatePage';

function App() {
  return (
    <>
      {/* <Hello />
      <ConditionalRender/>
      <Increment/>
      <Login />
      <Wishing/>
      <Welcome name="Ram" />
      <hr/>
      <Counter/>
      <hr/>
      <CounteruseEffect/>
      <hr/> */}
      {/* <LifecycleDemo/> */}
      {/* <UseEffectAxios/>
      <hr/>
      <ControlledFrom/>
      <hr/>
      <UnControlledForm/>
      <hr/>
      <MultiInputForm/>
      <hr/>
      <DynamicList/> */}

<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Counter</Link>
            </li>
            <li>
              <Link to="/UseEffectAxios">Axios</Link>
            </li>
            <li>
              <Link to="/Todo">Todo</Link>
            </li>
           
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">LoginPage</Link>
            </li>
            <li>
              <Link to="/DatePage">DatePage</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Counter />} />
          <Route path="/UseEffectAxios" element={<UseEffectAxios />} />
          <Route path="/Todo" element={<Todo />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/DatePage" element={<DatePage />} />
        </Routes>
      </div>
    </Router>
    </>

    
  );
}

export default App;





import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';

function App() {
  return (
    <Provider store={store}>
      <div>
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>
  );
}

export default App;

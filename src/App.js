import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './state/store';
import Component from './Component';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <p>Hello</p>
     <Component/>
    </div>
    </Provider>
  );
}

export default App;

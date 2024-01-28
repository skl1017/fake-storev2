import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './state/store';
import Component from './Component';
import {QueryClient, QueryClientProvider} from 'react-query';


const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <div className="App">
     <p>Hello</p>
     <Component/>
    </div>
    </Provider>
    </QueryClientProvider>
  );
}

export default App;

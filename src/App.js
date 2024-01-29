import './App.css';
import { Provider } from 'react-redux';
import store from './state/store';
import Main from './components/Main';

import {QueryClient, QueryClientProvider} from 'react-query';
import React from 'react';


const queryClient = new QueryClient();


function App() {
  return (


      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
        <div className="App">
        <Main/>
        </div>
        </Provider>
      </QueryClientProvider>
  

  );
}

export default App;

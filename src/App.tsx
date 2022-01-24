import React from 'react';
import './App.css';

import Main from './containers/main/Main'
import Sidebar from './containers/sidebar/Sidebar'

import useTheme from './hooks/useTheme';

function App() {
  useTheme()

  return (
    <div className="App">
      <Main />
      <Sidebar />
    </div>
  );
}

export default App;

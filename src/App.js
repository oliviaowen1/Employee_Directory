import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Wrapper from './components/Wrapper'


function App() {
  return (
    <div className="App">
      <Wrapper>
      <Header />
      <Main />
      </Wrapper>
    </div>
  );
}

export default App;

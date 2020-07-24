import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Car from './Car';

function App() {
  return (
    <div className="App">
      <MyComponent title="Title"/>
      <hr/>
      <Car  manufc="Honda" price={1000} />
    </div>
  );
}

export default App;

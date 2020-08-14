import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let rrr = 10;
  const array1 = ['a', 'b', 'c'];

  const ttt = () => {
    // while (rrr) {
    //   console.log('rrr', rrr);
    //   setTimeout(() => console.log(new Date()));
    //   rrr--;
    // }
    // for (let i = 0; i < 10; i++) {
    //   console.log('cikle', i);
    //   setTimeout(() => {
    //     console.log(i);
    //   });
    // }
    // for (const element of array1) {
    //   console.log('FOR_IN', element);
    //   setTimeout(() => {
    //     console.log(element);
    //   });
    // }
    // for (const element in array1) {
    //   console.log('FOR_OF', element);
    //   setTimeout(() => {
    //     console.log(element);
    //   });
    // }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <button onClick={ttt}>CLICK</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

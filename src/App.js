import './App.css';
import React,{useState} from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  function increaseHandler() {
    setCount(count + 1);
  }
  function decreaseHandler() {
    setCount(count - 1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="App">
      <div className='Title'>Increment & Decrement</div>
      <div className='Counter'>
      <button className='inc' onClick={decreaseHandler}>
        -
      </button>
      <div className='val'>
        {count}
      </div>
      <button className='dec' onClick={increaseHandler}>
        +
      </button>
      </div>
      <button className='Reset' onClick={resetHandler}>
        Reset
      </button>

    </div>
  );
}

export default App;

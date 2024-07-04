import { useId, useRef, useState } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const inputId = useId()
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0)
  };


  return (
    <div className="App-header">
      <div>
        <h1>Simplest Working Calculator with React JS</h1>
      </div>
      <form>
        <p ref={resultRef}>Result: {result}</p>
        <input
          id={inputId}
          pattern='[0-9]'
          ref={inputRef}
          type='number'
          placeholder='Type a number'
        />
        <br/>
        <div>
          <button className='Button-pad' onClick={plus}>Add</button>
          <button className='Button-pad' onClick={minus}>Substract</button>
          <button className='Button-pad' onClick={times}>Multiply</button>
          <button className='Button-pad' onClick={divide}>Divide</button>
          <button className='Button-pad Reset-input' onClick={resetInput}>Reset input</button>
          <button className='Button-pad Reset-result' onClick={resetResult}>Reset result</button>
        </div>
      </form>
    </div>
  );
}

export default App;

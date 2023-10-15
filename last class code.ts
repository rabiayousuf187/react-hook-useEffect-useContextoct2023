/useState

import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
      setCount(count+1);
    }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>Click</button>
    </>
  );
}

export default App;
-------------------------------------------------------------------------------------------------------------------------------

//useEffect

import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [click, setClick] = useState(0);

    const handleCount = () => {
      setCount(count+1);
    }

    useEffect(handleCount, [click]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setClick(click+1)}>Click</button>
    </>
  );
}

export default App;
------------------------------------------------------------------------------------------------------------------------------------

import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [value, setValue] = useState("")
  const [length, setLength] = useState(0)
  console.log(value);
  console.log(length);
  useEffect(()=> {
    let strLength = value.length;
    setLength(strLength)
  }, [value])
 
  return (
    <>
      <input type='text' value={value}  onChange={e => setValue(e.target.value)}/>
      <p>Total String Length: {length}</p>
    </>
  );
}

export default App;
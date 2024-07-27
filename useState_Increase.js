import { useState } from 'react';

const Test = () => {
  const [count, setCount] = useState(0)

  const handeClick = () => {
      setCount(count + 1);
  }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handeClick}>Click me</button>
    </div>
    ) 
};
export default Test;



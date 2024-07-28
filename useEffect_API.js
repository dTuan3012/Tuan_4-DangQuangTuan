import React, { useState, useEffect } from 'react';

function Test() {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
     .then(data => setData(data))
  }, [])

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)}/>
      <ul>
        {
          data.map(data => (
            <li key={data.id}>{data.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Test;





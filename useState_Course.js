import { useState } from 'react';

const courses = [
  'JavaScript',
  'C#',
  'Python',
  'SQL'
]

const Test = () => {
  const [course, setCourse] = useState()

  const handeClick = () => {
    let index = 0;
      while(true) {
        index = Math.floor(Math.random() * courses.length)
        if(course !== courses[index]) break;
      }
      setCourse(courses[index])
  }

  return (
    <div>
        <h1>{course || 'No Course'}</h1>
        <button onClick={handeClick}>Click me</button>
    </div>
    ) 
};
export default Test;



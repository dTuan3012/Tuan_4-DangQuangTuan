import { useState } from 'react';

const courses = [
  {
    id: 1,
    name: 'ReactJS'
  },
  {
    id: 2,
    name: 'NodeJS'
  }, 
  {
    id: 3,
    name: 'VueJS'
  }
]

const Test = () => {
  const [checked, setChecked] = useState([])

  const HandleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked) {
          return checked.filter(check => check !== id)
      } else {
        return [...prev, id]
      }
    })
      
  }

  const Submit = () => {
     console.log(checked)
  }

  return (
    <div>
        {
          courses.map(course => (
            <div key={course.id}>
              <input
                  checked={checked.includes(course.id)}
                  onChange={() => HandleCheck(course.id)}
                  type="checkbox" />
              {course.name}
            </div>
          ))
        }
        <button onClick={Submit}>Submit</button>
    </div>
    ) 
};
export default Test;



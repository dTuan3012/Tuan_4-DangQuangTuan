import { useEffect, useState } from "react"
import React from 'react'

const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Học SASS'
    },
    {
        id: 3,
        name: 'javascript cơ bản'
    },
    {
        id: 4,
        name: 'ReactJs'
    }
]

export default function Test () {

    const [courseId, setCourseId] = useState(1)

    function emitComment (id) {

        setInterval( () => {
    
            window.dispatchEvent( 
                new CustomEvent(`course-${id}`, {
                    detail: `Đây là nội dung của course ${id}`
                })
            )
    
        }, 2000)
    
    }
    emitComment(courseId)

    useEffect( () => {

        const handleComment = ({detail}) => {
            console.log(detail)
        }

        window.addEventListener(`course-${courseId}`, handleComment)


        return () => {
            window.removeEventListener(`course-${courseId}`, handleComment)
        }

    }, [courseId])
    
    return ( 
        <React.Fragment>
            <ul>
                {courses.map( (course, index) => 
                    <li 
                        key={index}
                        style={ {
                            color: courseId === course.id ?  '#af18df' : '#444'
                        }}
                        onClick={ () => setCourseId(course.id)}
                    >
                        {course.name}
                    </li>
                )}
            </ul>
        </React.Fragment>
    )
}
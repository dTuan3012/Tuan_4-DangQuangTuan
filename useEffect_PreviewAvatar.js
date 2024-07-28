import { useEffect, useState } from "react"
import React from 'react'

function Test () {

    const [avatar, setAvatar] = useState()

    useEffect( ()=> {
        // clean up function to avoid memory leak
        return () => {
            URL.revokeObjectURL(avatar?.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    
    return ( 
        <React.Fragment>
            <input
                type="file"
                // multiple - nếu muốn chọn nhiều file
                onChange={handlePreviewAvatar} 
            />
            
                <img src={avatar?.preview} width= '200px' height='200px' />

        </React.Fragment>
    )
}

export default Test
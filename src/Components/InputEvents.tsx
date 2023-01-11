import React, { useState } from 'react'



const InputEvents = () => {

    const [userData,setUserData] = useState("")

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setUserData(event.target.value)
    }

    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) =>{
        console.log(userData);
    }
  return (
    <div>
        <h1>Input Evenet , Mouse event for onclick , changeEvenet for onchange</h1>
        <input type="text" placeholder='Enter Your name' value={userData} onChange = {handleChange} />
        <button onClick={handleClick}>Add user</button>
    </div>
  )
}

export default InputEvents
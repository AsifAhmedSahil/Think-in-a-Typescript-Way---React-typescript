import React, { useState } from 'react'

const Form = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[formData,setFormData] = useState("")

    const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setName(event.target.value);

    }

    const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value);

    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const newUser = {name,email}
        // setFormData(newUser)
        console.log(newUser)


    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="">
            Name 
            <input type="text" placeholder='Name' name='name' value={name} required onChange={handleNameChange} />
        </label>
        </div>
        <div>
        <label htmlFor="">
            Email
            <input type="email" placeholder='Email' name='email' value={email} required onChange={handleEmailChange} />
        </label>
        </div>

        <button type='submit'>Create user</button>
    </form>
  )
}

export default Form
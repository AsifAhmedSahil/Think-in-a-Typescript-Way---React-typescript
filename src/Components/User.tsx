import React from 'react'

type UserProps = {name:string; age:number; isRegistered:boolean; lang:string[]}

const User = ({name,age,isRegistered,lang}:UserProps) => {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{age} years old</h2>
        {
            isRegistered ? <p>Register</p> : <p>Not Register</p>
        }
        <p>Speaks: {lang.map((language,index)=>{
            return <span key={index}>{language} </span>
        })}</p>
    </div>
  )
}

export default User
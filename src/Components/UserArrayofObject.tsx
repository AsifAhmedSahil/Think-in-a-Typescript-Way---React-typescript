import React from 'react'

type UserArrayDemo  = {
    UserArray: {
        id: number;
        name: string;
        email: string;
        number: string;
    }[]
}
    

const UserArrayofObject = ({UserArray}:UserArrayDemo) => {
  return (
    <div>{
        UserArray.map((user)=>{
            return <div key={user.id}>
                {user.name}
            </div>
        })
        }</div>
  )
}

export default UserArrayofObject
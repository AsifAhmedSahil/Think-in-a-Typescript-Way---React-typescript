
import React from 'react'

type userData = {
    userdata: {
        name: string;
        age: number;
        isRegistered: boolean;
        lang: string[];
    }
}

const USerObject = ({userdata}: userData) => {

  return (
    <div>
        <h1>{userdata.name}</h1>
        <h1>{userdata.age}</h1>
        
    
    </div>
  )
}

export default USerObject
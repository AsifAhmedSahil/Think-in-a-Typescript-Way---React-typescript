import React, { useState } from 'react';

import './App.css';
import Button from './Components/Button';
import ButtonStyle from './Components/ButtonStyle';
import DataFetch from './Components/DataFetch';
import Post from './Components/Post';
import User from './Components/User';
import UserArrayofObject from './Components/UserArrayofObject';
import USerObject from './Components/USerObject';

// const userdata1 = {
  
//     name:"Asif vai",
//    age:22,
//     isRegistered:true,
//      lang: [ 'bangla' , 'English']
  
// }

// const userdata2 = {
  
//   name:"Sanjidar jamai",
//  age:22,
//   isRegistered:false,
//    lang: [ 'bangla' , 'English']

// }

// Array of object
// const UserArray = [
//   {
//     id: 1,
//     name:"Asif sahil",
//     email:"asif@gmail.com",
//     number: "01790508014"
//   },
//   {
//     id: 2,
//     name:"Sahil on fire",
//     email:"asif@gmail.com",
//     number: "01790508014"
//   },
// ]

// const style = {
//   backgroundColor: "green",
//   color:"white",
//   padding: "0.5rem"
// }

type User = {
  id: number,
  name:string
}


function App() {
  const [user, setUser] = useState<User>({} as User)

  const handleUSer = () =>{
    setUser({id:1,name:"Asif vai"})
    console.log(user)

  }
  return (
    <div className="App">
     
    {/* <User name={"Asif Ahmed"} age={22} isRegistered={true} lang={['bangla','english']}/> */}
    {/* <User name={"Sanjida Alam"} age={22} isRegistered={false}/> */}

    {/* <USerObject userdata={userdata1}/> 
    <USerObject userdata={userdata2}/>  */}
    {/* <UserArrayofObject UserArray={UserArray}/> */}


{/* user define props */}
    {/* <DataFetch status="success"/> */}

    {/* Button children props */}
    {/* <h1>Children Props</h1>
    <Button>Click me</Button>

    <Post/> */}

    {/* style componet or css pass kora props diye */}
    {/* <ButtonStyle btnStyle={style}/> */}


    {/* react hook type explain */}
    <h1>Hook Type </h1>

    <button onClick={handleUSer}>Add User</button>

    </div>
  );
}

export default App;

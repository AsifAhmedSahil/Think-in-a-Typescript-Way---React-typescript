import React from 'react';

import './App.css';
import Button from './Components/Button';
import DataFetch from './Components/DataFetch';
import Post from './Components/Post';
import User from './Components/User';
import UserArrayofObject from './Components/UserArrayofObject';
import USerObject from './Components/USerObject';

const userdata1 = {
  
    name:"Asif vai",
   age:22,
    isRegistered:true,
     lang: [ 'bangla' , 'English']
  
}

const userdata2 = {
  
  name:"Sanjidar jamai",
 age:22,
  isRegistered:false,
   lang: [ 'bangla' , 'English']

}

// Array of object
const UserArray = [
  {
    id: 1,
    name:"Asif sahil",
    email:"asif@gmail.com",
    number: "01790508014"
  },
  {
    id: 2,
    name:"Sahil on fire",
    email:"asif@gmail.com",
    number: "01790508014"
  },
]

function App() {
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
    <h1>Children Props</h1>
    <Button>Click me</Button>

    <Post/>
    </div>
  );
}

export default App;

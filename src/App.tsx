import React from 'react';

import './App.css';
import User from './Components/User';
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

function App() {
  return (
    <div className="App">
     
    <User name={"Asif Ahmed"} age={22} isRegistered={true} lang={['bangla','english']}/>
    {/* <User name={"Sanjida Alam"} age={22} isRegistered={false}/> */}

    <USerObject userdata={userdata1}/> 
    <USerObject userdata={userdata2}/> 
    </div>
  );
}

export default App;

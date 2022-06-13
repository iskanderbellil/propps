import './App.css';
import Profile from './Profile/Profile';
import image from './Profile/image.jpg';


import React from 'react'

function App () {
  const name="Bellil Iskander"
  const bio="loading"
  const profession="student at GoMyCode"

  const handleName=(str)=> {
    alert(`My name is ${str}`);
  }
    

  return (
    <div>
    <Profile name={name} bio={bio} profession={profession} handleName={handleName}/>  
     <img style={{width:200,height:200,top:22, left:20}} src={image} alt='my photo' />
  </div>
  )
}


export default App;

import './App.css';
import Profile from './Profile/Profile';
import image from './Profile/image.jpg';





function App() {
  const name="Bellil Iskander"
  const bio="loading"
  const profession="student at GoMyCode"

const handleName=()=> {
 alert(name)
  
 }

  return (
    <div>
      <Profile myName={name} aboutMe={bio} myProfession={profession} handleName={handleName}/>  
       <img style={{width:200,height:200,top:22, left:20}} src={image} alt='my photo'></img>  
    </div>
);
}

export default App;

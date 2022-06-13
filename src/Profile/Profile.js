import React from 'react';
import PropTypes from 'prop-types'; 


const Profile = (props) => {
  console.log(props)

  const handleClick = () => props.handleName(props.name)
  return (
  
  <div>
  
  <h1 style={{color:"#18204B" }}>My Name is {props.name} </h1>
  <h3 style={{backgroundColor:"#18204B" , color:"white", fontSize:30 }}> I am {props.bio} and {props.profession} </h3>
  <p>{props.children}</p>
  <button onClick={handleClick}>Who am I?</button>
  
  </div>
  )
};

Profile.defaultProps={
  name:"What's your name",
  bio:"what's your bio",
  myProfession:" what's your profession"

}



Profile.propTypes={
  name: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName:PropTypes.func 
}

export default Profile;
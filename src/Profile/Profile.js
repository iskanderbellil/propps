import React from 'react';
import PropTypes from 'prop-types'; 


const Profile = (props) => {
  console.log(props)
  return (
  
  <div>
  
  <h1 style={{color:"#18204B" }}>My Name is {props.myName} </h1>
  <h3 style={{backgroundColor:"#18204B" , color:"white", fontSize:30 }}> I am {props.aboutMe} and {props.myProfession} </h3>
  <p>{props.children}</p>
  <button onClick={props.handleName}>Who am I?</button>
  
  </div>
  )
};

Profile.defaultProps={
  myName:"What's your name",
  aboutMe:"what's your bio",
  myProfession:" what's your profession",
  children:"my img",
}



Profile.propTypes={
  myName: PropTypes.string,
  aboutMe: PropTypes.string,
  myProfession: PropTypes.string,
  children:PropTypes.element,
  handleName:PropTypes.func 
}

export default Profile;
import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../fire/firebase';
import Signup from './Signup';
import Signin from './Signin';

const auth = getAuth(app);
const Createacc= () => {
const firsst=()=>{
  createUserWithEmailAndPassword(auth, "tarunkale01@gmail.com", "Asdfghjkl$56")
  .then((userCredential) => {
  console.log(userCredential)
  })

}




  return (
    <div>
   <button onClick={firsst}>click for signup</button>
   <Signup></Signup>
  
  <Signin></Signin>
    </div>
  )
}

export default Createacc

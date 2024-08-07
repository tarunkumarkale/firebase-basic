import React, { useState,useEffect } from 'react';
import { useFirebase } from '../context/firebasecontext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const firebase=useFirebase()
  const navi=useNavigate()
//////////////////////////////////////////////////////////////////////////////////////
  /// if userlogin hai to home page redirect kr dege if not to vo signin karegga ager new hai to signup
  useEffect(()=>{
    if(firebase.islogin){
        navi('/')
    }
      },[firebase,navi])
////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleSignup = async(e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Email:', email);
    console.log('Password:', password);

await firebase.signUpWithEmailAndPassword(email,password)
console.log('succesfull')
  };

 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            create account 
          </button>
        </form>
     
      </div>
    </div>
  );
};

export default Register;

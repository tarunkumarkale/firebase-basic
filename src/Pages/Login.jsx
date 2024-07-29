import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/firebasecontext';
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const navi=useNavigate()
  const firebase=useFirebase()
////////////////////////////////////////////////////////////////////////////////////////////////

  //if userlogin hai to home page redirect kr dege if not to vo signin karegga ager new hai to signup
  useEffect(()=>{
if(firebase.islogin){
    navi('/')
}
  },[firebase,navi])
///////////////////////////////////////////////////////////////////////////////////////////////////

  const handleSignup = async(e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Email:', email);
    console.log('Password:', password);

await firebase.SigninUserEmailandPassword(email,password)
console.log('succesfull')
  };

  const signwithgogle=async()=>{
    await firebase.SignInwithgoogle()
  }
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Sign In</h2>
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
            Sign In
          </button>
        </form>


      </div>
      <h1 className='text-2xl'>---OR---</h1>
      <div className='mt-4'>
        <button className='  text-5xl text-red-700' onClick={signwithgogle}> <FaGoogle/>   </button>
        </div>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../fire/firebase';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);  // google
  const provider = new GoogleAuthProvider();  // goggle

  const handleSignin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Sign In</h2>
        <form onSubmit={handleSignin}>
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
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mb-4"
          >
            Signup
          </button>
        </form>
        <button
          onClick={handleGoogleSignin}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 flex items-center justify-center"
        >
          <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="#4285F4" d="M24 9.5c3.2 0 5.8 1.1 7.7 3.3l5.8-5.8C33.4 3.5 29 2 24 2 14.3 2 6.4 7.6 3 15.7l6.8 5.3C11.6 14.4 17.2 9.5 24 9.5z"></path>
            <path fill="#34A853" d="M48 24.5c0-1.8-.2-3.6-.5-5.3H24v10.1h13.4c-1.1 5.3-5.1 9.8-10.4 11.3l6.4 5 1 .1C41.8 42.7 48 34.5 48 24.5z"></path>
            <path fill="#FBBC05" d="M3 15.7c-.5 1.2-.7 2.4-.7 3.8 0 1.4.3 2.6.7 3.8l6.8-5.3c-.3-.8-.5-1.6-.5-2.5 0-.9.2-1.7.5-2.5L3 15.7z"></path>
            <path fill="#EA4335" d="M24 47c6.5 0 11.9-2.1 15.8-5.7l-6.4-5c-2.4 1.6-5.4 2.5-9.4 2.5-6.8 0-12.4-4.9-14.4-11.4l-6.8 5.3C6.4 40.4 14.3 47 24 47z"></path>
          </svg>
          Sign in with Google
        </button>
        <p className="mt-5 text-center text-gray-600">
          Don't have an account? <a href="#" className="text-blue-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;

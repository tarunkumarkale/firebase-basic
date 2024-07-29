import React from 'react'

import Testing from './realtimedatabase/testing';
import Createacc from './Auth/Createacc';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Navbar from './Navbar';
import AddNewBooks from './Pages/AddNewBooks';
import Home from './Pages/Home';




const App = () => {


 

  return (
    <div>

{/* 
   👿 // :this is first method  */}
      {/* <Testing></Testing>  // first this is check ki realtime database  overall check kr raha ki connect hua ki nahi  first part yeh hai, document se dekhna  bss nxt time

<Createacc></Createacc> // for auth */}


{/* ================================================================================================================================================================================================================================================================== */}

{/* 
Project */}

{/* first make auth in pages folder Register components */}
{/* second make auth in pages folder Login components */}
{/* third  google auth  in Login page*/}

{/* four curd now photo ,image, go to storage*/}
{/* four curd now text form me data go to firestore database */}




<BrowserRouter  basename="/firebase-basic">

<Navbar></Navbar>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/Register' element={<Register/>}/>
<Route path='/Login' element={<Login/>}/>

<Route path='/book/list' element={<AddNewBooks/>}/>




</Routes>





</BrowserRouter>

















    </div>
  )
}

export default App

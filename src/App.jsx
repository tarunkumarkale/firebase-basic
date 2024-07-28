import React from 'react'

import Testing from './realtimedatabase/testing';
import Createacc from './Auth/Createacc';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './Pages/Register';


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




<BrowserRouter  basename="/firebase-basic">


<Routes>

<Route path='/' element={<h1>home </h1>}/>
<Route path='/Register' element={<Register/>}/>




</Routes>





</BrowserRouter>

















    </div>
  )
}

export default App

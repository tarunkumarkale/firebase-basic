import React from 'react'
import {getDatabase,set,ref} from "firebase/database"  // first import sabse phele
import { app } from '../fire/firebase'

const Testing = () => {


    const db=getDatabase(app)
const first=()=>{
    set(ref(db, 'users/tarun' ), {
        id: 1,
        username: "tarun",
        age: 21
      });
}
 

  return (
    <div>
      <h1 className='text-green-900'>hello taurnkale</h1>

      <button onClick={first}>click</button>
    </div>
  )
}

export default Testing

import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/firebasecontext';
import Card from './Card';

const Home = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);

 
  useEffect(() => {
    firebase.getListAllbooks().then((comics) => {
      setBooks(comics.docs);
    
    }).catch(error => {
      console.error('Error fetching books:', error);
    });
  }, [firebase]);

  return (
    <div className="flex flex-wrap justify-center">
       {books.map((book, index) => (
        <Card 
          key={index}
          {...book.data()}
        />
      ))} 
    </div>
  );
};

export default Home;

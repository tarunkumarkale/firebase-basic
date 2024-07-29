import React, { useState } from 'react';
import { useFirebase } from '../context/firebasecontext';
import firebase from 'firebase/compat/app';

const AddNewBooks = () => {
  const [bookName, setBookName] = useState('');
  const [isbn, setIsbn] = useState('');
  const [price, setprice] = useState('');
  const [bookPic, setBookPic] = useState(null);


const Firebase=useFirebase()

  const handleBookPicChange = (e) => {
    setBookPic(e.target.files[0]);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      bookName,
      isbn,
      bookPic,
    });
await Firebase.handleCreateNewBookListing(bookName,price,isbn,bookPic)


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Add New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Book Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter book name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">ISBN Number</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter ISBN number"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Book price</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setprice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Book Picture</label>
            <input
              type="file"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleBookPicChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewBooks;

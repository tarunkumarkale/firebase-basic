import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/firebasecontext';

const Card = (props) => {
  const [urlimage, setUrlImage] = useState('');
  const firebase = useFirebase();

  useEffect(() => {
    firebase.getImageUrl(props.imageURL)
      .then(image => setUrlImage(image))
      .catch(error => console.error('Error fetching image URL:', error));
  }, [props.imageURL, firebase]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={urlimage} alt={props.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">ISBN: {props.isbn}</p>
        <p className="text-gray-900 font-bold mt-2">Price: ${props.price}</p>
      </div>
    </div>
  );
};

export default Card;

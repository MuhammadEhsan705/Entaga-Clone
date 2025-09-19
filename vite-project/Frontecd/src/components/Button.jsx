import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../pages/Form';

function Button() {
  return (
    <>
      <Link to="/form" className=''>
        <button className=" cursor-pointer px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-600 transition">
          Get A Quote
        </button>
      </Link>
    </>
  );
}

export default Button;

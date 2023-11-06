/* eslint-disable react/prop-types */
import React from 'react';

const BorrowedCard = ({book}) => {
    const {_id, name, category_name, author_name, photo, quantity, rating, desp ,returnDate} = book;
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={photo}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {name}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       {author_name}
      </p>
      <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
      {category_name}
    </p>
    <p className="block font-sans text-sm antialiased font-normal  leading-normal my-3 text-gray-700 opacity-75">
    Return Date:{returnDate}
    </p>
   
  </div>
  <div className="p-6 pt-0">
    <button
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      RETURN BOOK
    </button>
  </div>
</div>
        </div>
    );
};

export default BorrowedCard;
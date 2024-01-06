 /* eslint-disable react/prop-types */

/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const BorrowedCard = ({ myBook, myBorrowedBooks, setMyBorrowedBooks }) => {
  const { _id, name, category_name, author_name, photo, returnDate, borrowDate, bookId } = myBook;
  
  const { user } = useContext(AuthContext);
  const handleDelete = (_id, bookId) => {
    console.log('bookID',bookId);
    console.log("deleteid:", _id);
  
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, return it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('delete confirm');
        const addtoborrow = {
          bookId,

        };
        console.log(addtoborrow);
  // const data=new FormData()
  // data.append('bookId',bookId)
     
                    fetch(`https://id-8-serversite.vercel.app/deleteborrow/${_id}`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(addtoborrow),
                    })
                      .then(res => res.json())
                      .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                          // Book deleted successfully, now update the frontend state
                          // const remaining = myBorrowedBooks.filter(book => book._id !== _id);
                          // setMyBorrowedBooks(remaining);
                        }
                      });
                  }
                });
            
         
  };
  

 


  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-gray-300 shadow-md w-60 rounded-sm bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-40 w-52 bg-clip-border">
          <img src={photo} className="object-cover" />
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
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            Borrow Date: {borrowDate}
          </p>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            Return Date: {returnDate}
          </p>
        </div>
        <div className="p-6 pt-0 bg-warning">
          <button onClick={() => handleDelete(_id, bookId)} className="float-right w-full font-semibold mt-10 btn text-black hover:text-red-500 text-xs">
            RETURN BOOK
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedCard;




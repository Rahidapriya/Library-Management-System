/* eslint-disable react/prop-types */
import React from 'react';
import Swal from 'sweetalert2';
import Footer from '../../components/footer/Footer';

const BorrowedCard = ({myBook, myBorrowedBooks,setMyBorrowedBooks}) => {
    const {_id, name, category_name, author_name, photo, quantity, rating, desp ,returnDate} = myBook;

        // delete
        const handleDelete = _id =>{
          console.log("deleteid:",_id);
      
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
              fetch(`http://localhost:5005/addtoborrow/${_id}`,{
                  method:'DELETE'
                  
              })
              .then(res =>res.json())
              .then (data => {
                  console.log(data);
                  if(data.deletedCount>0){
                      Swal.fire(
                          'Returned!',
                          'Your have returned book successfully.',
                          'success'
                        )
                        const remaining = myBorrowedBooks.filter(book=>book._id!==_id);
                        setMyBorrowedBooks(remaining);
                  }
              })
              }
            })
         }
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-gray-300 shadow-md  w-60  rounded-sm bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-40 w-52  bg-clip-border">
    <img
      src={photo}
      className="object-cover "
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
    <p className="block font-sans text-sm antialiased font-normal  leading-normal  text-gray-700 opacity-75">
    Return Date:{returnDate}
    </p>
   
  </div>
  <div className="p-6 pt-0 bg-warning">
  <button onClick={()=>handleDelete(_id)} className=" float-right w-full font-semibold mt-10 btn text-black hover:text-red-500 text-xs">RETURN BOOK</button>
    {/* <button
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      RETURN BOOK
    </button> */}
  </div>
</div>
{/* <Footer></Footer> */}
        </div>
    );
};

export default BorrowedCard;
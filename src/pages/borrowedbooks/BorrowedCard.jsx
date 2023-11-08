/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const BorrowedCard = ({ myBook, myBorrowedBooks, setMyBorrowedBooks }) => {
  const { _id, name, category_name, author_name, photo, returnDate, borrowDate, bookId } = myBook;
  const { user } = useContext(AuthContext);
  const handleDelete = (_id, bookId) => {
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
  
     
                    fetch(`https://id-8-serversite.vercel.app/addtoborrow/${_id}`, {
                      method: 'DELETE',
                    })
                      .then(res => res.json())
                      .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                          // Book deleted successfully, now update the frontend state
                          const remaining = myBorrowedBooks.filter(book => book._id !== _id);
                          setMyBorrowedBooks(remaining);
                        }
                      });
                  }
                });
            
         
  };
  

  // const handleDelete = (_id, bookId) => {
  //   console.log("deleteid:", _id);

  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, return it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       console.log('delete confirm');
  //       fetch(`https://id-8-serversite.vercel.app/addtoborrow/${_id}`, {
  //         method: 'DELETE'
  //       })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //         if (data.deletedCount > 0) {
  //           // Successfully deleted, now update the book quantity in the backend
  //           fetch(`https://id-8-serversite.vercel.app/books/${bookId}`, {
  //             method: 'PUT',
  //             headers: {
  //               'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({ action: 'return' }),
  //           })
  //           .then(response => response.json())
  //           .then(bookData => {
  //             console.log(bookData);
  //             if (bookData.message === 'Book Returned Successfully') {
  //               // Book quantity updated successfully, now update the frontend state
  //               const remaining = myBorrowedBooks.filter(book => book._id !== _id);
  //               setMyBorrowedBooks(remaining);
  //             }
  //           });
  //         }
  //       });
  //     }
  //   });
  // 
//};

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

// /* eslint-disable react/prop-types */
// import React from 'react';
// import Swal from 'sweetalert2';
// import Footer from '../../components/footer/Footer';

// const BorrowedCard = ({myBook, myBorrowedBooks,setMyBorrowedBooks}) => {
//     const {_id, name, category_name, author_name, photo, quantity, rating, desp ,returnDate,borrowDate} = myBook;

//         // delete
//         const handleDelete = _id =>{
//           console.log("deleteid:",_id);
      
//           Swal.fire({
//               title: 'Are you sure?',
//               text: "You won't be able to revert this!",
//               icon: 'warning',
//               showCancelButton: true,
//               confirmButtonColor: '#3085d6',
//               cancelButtonColor: '#d33',
//               confirmButtonText: 'Yes, return it!'
//             }).then((result) => {
//               if (result.isConfirmed) {
            
//               console.log('delete confirm');
//               fetch(`https://id-8-serversite.vercel.app/addtoborrow/${_id}`,{
//                   method:'DELETE'
                  
//               })
//               .then(res =>res.json())
//               .then (data => {
//                   console.log(data);
//                   if(data.deletedCount>0){
//                       Swal.fire(
//                           'Returned!',
//                           'Your have returned book successfully.',
//                           'success'
//                         )
//                         const remaining = myBorrowedBooks.filter(book=>book._id!==_id);
//                         setMyBorrowedBooks(remaining);
//                   }
//               })
//               }
//             })
//          }
//     return (
//         <div>
//             <div className="relative flex flex-col text-gray-700 bg-gray-300 shadow-md  w-60  rounded-sm bg-clip-border">
//   <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-40 w-52  bg-clip-border">
//     <img
//       src={photo}
//       className="object-cover "
//     />
//   </div>
//   <div className="p-6">
    
//       <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
//         {name}
//       </p>
//       <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
//        {author_name}
//       </p>
//       <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
//       {category_name}
//     </p>
//     <p className="block font-sans text-sm antialiased font-normal  leading-normal  text-gray-700 opacity-75">
//     Borrow Date:{borrowDate}
//     </p>
//     <p className="block font-sans text-sm antialiased font-normal  leading-normal  text-gray-700 opacity-75">
//     Return Date:{returnDate}
//     </p>
   
//   </div>
//   <div className="p-6 pt-0 bg-warning">
//   <button onClick={()=>handleDelete(_id)} className=" float-right w-full font-semibold mt-10 btn text-black hover:text-red-500 text-xs">RETURN BOOK</button>
    
//   </div>
// </div>
// {/* <Footer></Footer> */}
//         </div>
//     );
// };

// export default BorrowedCard;



// /* eslint-disable react/prop-types */
// import React from 'react';
// import Swal from 'sweetalert2';

// const BorrowedCard = ({ myBook, myBorrowedBooks, setMyBorrowedBooks }) => {
//   const { _id, name, category_name, author_name, photo, returnDate, borrowDate, bookId } = myBook;
//  const handleDelete = (_id, bookId) => {
//   console.log("deleteid:", _id);

//   Swal.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes, return it!'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       console.log('delete confirm');

//       // Fetch the book data to get the current quantity
//       fetch(`https://id-8-serversite.vercel.app/books/${bookId}`)
//         .then(res => res.json())
//         .then(bookData => {
//           // Check if you got the book data and the quantity
//           if (bookData && bookData.quantity !== undefined) {
//             const currentQuantity = bookData.quantity;

//             // Calculate the updated quantity
//             const updatedQuantity = currentQuantity + 1;

//             // First, increment the quantity in the state
//             const updatedBookData = { ...bookData, quantity: updatedQuantity };

//             // Then, send a PUT request to update the book quantity
//             fetch(`https://id-8-serversite.vercel.app/books/${bookId}`, {
//               method: 'PUT',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify(updatedBookData),
//             })
//               .then(response => response.json())
//               .then(bookData => {
//                 console.log(bookData);
//                 if (bookData.message === 'Book Updated Successfully') {
//                   // Book quantity updated successfully, now proceed with the deletion
//                   fetch(`https://id-8-serversite.vercel.app/addtoborrow/${_id}`, {
//                     method: 'DELETE',
//                   })
//                     .then(res => res.json())
//                     .then(data => {
//                       console.log(data);
//                       if (data.deletedCount > 0) {
//                         // Book deleted successfully, now update the frontend state
//                         const remaining = myBorrowedBooks.filter(book => book._id !== _id);
//                         setMyBorrowedBooks(remaining);
//                       }
//                     });
//                 }
//               });
//           }
//         });
//     }
//   });
// };


//   // const handleDelete = (_id, bookId) => {
//   //   console.log("deleteid:", _id);

//   //   Swal.fire({
//   //     title: 'Are you sure?',
//   //     text: "You won't be able to revert this!",
//   //     icon: 'warning',
//   //     showCancelButton: true,
//   //     confirmButtonColor: '#3085d6',
//   //     cancelButtonColor: '#d33',
//   //     confirmButtonText: 'Yes, return it!'
//   //   }).then((result) => {
//   //     if (result.isConfirmed) {
//   //       console.log('delete confirm');
//   //       fetch(`https://id-8-serversite.vercel.app/addtoborrow/${_id}`, {
//   //         method: 'DELETE'
//   //       })
//   //       .then(res => res.json())
//   //       .then(data => {
//   //         console.log(data);
//   //         if (data.deletedCount > 0) {
//   //           // Successfully deleted, now update the book quantity in the backend
//   //           fetch(`https://id-8-serversite.vercel.app/books/${bookId}`, {
//   //             method: 'PUT',
//   //             headers: {
//   //               'Content-Type': 'application/json',
//   //             },
//   //             body: JSON.stringify({ action: 'return' }),
//   //           })
//   //           .then(response => response.json())
//   //           .then(bookData => {
//   //             console.log(bookData);
//   //             if (bookData.message === 'Book Returned Successfully') {
//   //               // Book quantity updated successfully, now update the frontend state
//   //               const remaining = myBorrowedBooks.filter(book => book._id !== _id);
//   //               setMyBorrowedBooks(remaining);
//   //             }
//   //           });
//   //         }
//   //       });
//   //     }
//   //   });
//   // };

//   return (
//     <div>
//       <div className="relative flex flex-col text-gray-700 bg-gray-300 shadow-md w-60 rounded-sm bg-clip-border">
//         <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-40 w-52 bg-clip-border">
//           <img src={photo} className="object-cover" />
//         </div>
//         <div className="p-6">
//           <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
//             {name}
//           </p>
//           <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
//             {author_name}
//           </p>
//           <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
//             {category_name}
//           </p>
//           <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
//             Borrow Date: {borrowDate}
//           </p>
//           <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
//             Return Date: {returnDate}
//           </p>
//         </div>
//         <div className="p-6 pt-0 bg-warning">
//           <button onClick={() => handleDelete(_id, bookId)} className="float-right w-full font-semibold mt-10 btn text-black hover:text-red-500 text-xs">
//             RETURN BOOK
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BorrowedCard;

// // /* eslint-disable react/prop-types */
// // import React from 'react';
// // import Swal from 'sweetalert2';
// // import Footer from '../../components/footer/Footer';

// // const BorrowedCard = ({myBook, myBorrowedBooks,setMyBorrowedBooks}) => {
// //     const {_id, name, category_name, author_name, photo, quantity, rating, desp ,returnDate,borrowDate} = myBook;

// //         // delete
// //         const handleDelete = _id =>{
// //           console.log("deleteid:",_id);
      
// //           Swal.fire({
// //               title: 'Are you sure?',
// //               text: "You won't be able to revert this!",
// //               icon: 'warning',
// //               showCancelButton: true,
// //               confirmButtonColor: '#3085d6',
// //               cancelButtonColor: '#d33',
// //               confirmButtonText: 'Yes, return it!'
// //             }).then((result) => {
// //               if (result.isConfirmed) {
            
// //               console.log('delete confirm');
// //               fetch(`https://id-8-serversite.vercel.app/addtoborrow/${_id}`,{
// //                   method:'DELETE'
                  
// //               })
// //               .then(res =>res.json())
// //               .then (data => {
// //                   console.log(data);
// //                   if(data.deletedCount>0){
// //                       Swal.fire(
// //                           'Returned!',
// //                           'Your have returned book successfully.',
// //                           'success'
// //                         )
// //                         const remaining = myBorrowedBooks.filter(book=>book._id!==_id);
// //                         setMyBorrowedBooks(remaining);
// //                   }
// //               })
// //               }
// //             })
// //          }
// //     return (
// //         <div>
// //             <div className="relative flex flex-col text-gray-700 bg-gray-300 shadow-md  w-60  rounded-sm bg-clip-border">
// //   <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-40 w-52  bg-clip-border">
// //     <img
// //       src={photo}
// //       className="object-cover "
// //     />
// //   </div>
// //   <div className="p-6">
    
// //       <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
// //         {name}
// //       </p>
// //       <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
// //        {author_name}
// //       </p>
// //       <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
// //       {category_name}
// //     </p>
// //     <p className="block font-sans text-sm antialiased font-normal  leading-normal  text-gray-700 opacity-75">
// //     Borrow Date:{borrowDate}
// //     </p>
// //     <p className="block font-sans text-sm antialiased font-normal  leading-normal  text-gray-700 opacity-75">
// //     Return Date:{returnDate}
// //     </p>
   
// //   </div>
// //   <div className="p-6 pt-0 bg-warning">
// //   <button onClick={()=>handleDelete(_id)} className=" float-right w-full font-semibold mt-10 btn text-black hover:text-red-500 text-xs">RETURN BOOK</button>
    
// //   </div>
// // </div>
// // {/* <Footer></Footer> */}
// //         </div>
// //     );
// // };

// // export default BorrowedCard;
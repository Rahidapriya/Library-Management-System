import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";
import ReactStars from "react-rating-stars-component";
import borrow from '../../assets/borrow.jpg'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { MdProductionQuantityLimits } from 'react-icons/md';
import Swal from "sweetalert2";

const DetailsBook = () => {
  const details = useLoaderData();
  const { _id, name, category_name, author_name, photo, quantity, rating, desp } = details;

  const { user } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState("");
  
//   console.log('Email',user.email);
  const ratingChanged = (newRating) => {
    // Handle the rating change here
    console.log(newRating);
  };

// displayName: name
      const handleAddToCart=(selectedDate)=>{
    const addtoborrow = { userEmail:user?.email,userName:user?.displayName,returnDate:selectedDate, name, category_name, author_name, photo, quantity, rating, desp  };
    console.log(addtoborrow);
  
     
    fetch(`http://localhost:5005/addtoborrow`,{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(addtoborrow)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data);
      if(data.insertedId){
          Swal.fire({
              title: 'Success!',
              text: 'Book Borrowed Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
      }
     })
  
      }

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col lg:flex-row justify-center items-center bg-[#DBEEFD] py-20">
        <div className="w-6/12 flex flex-col justify-center items-center">
          <p className="font-bold text-4xl mb-6">Details of Book</p>
          <img src={borrow} className="lg:w-8/12 w-full" alt="" />
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md lg:w-4/12 w-full rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
            <img
              src={photo}
              className="object-cover w-full"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans antialiased font-bold text-2xl leading-relaxed text-blue-gray-900">
                {name}
              </p>
              <div className="flex items-center">
                <MdProductionQuantityLimits className='text-3xl text-[#ff0000] font-bold'></MdProductionQuantityLimits>
                <p className="block font-sans font-bold antialiased text-xl leading-relaxed text-blue-gray-900">
                  Quantity: {quantity}
                </p>
              </div>
            </div>
            <div className="block mb-2">
              <ReactStars
                count={5}
                value={rating} // Pass the rating value here
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Category: {category_name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Author: {author_name}
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              {desp}
            </p>
          </div>
          <div className="p-6 pt-0 flex gap-4">
          <button  onClick={()=>document.getElementById('my_modal_4').showModal()}
  className="block w-full select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  type="button"
  disabled={parseInt(quantity, 10) === 0} // Convert quantity to an integer and check if it's equal to 0
>
  BORROW
</button>

{/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button> */}
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-6/12 max-w-5xl flex flex-col items-center mx-auto justify-center">
    <h3 className="font-bold text-lg">Select Your Return date</h3>
    {/* <input type="date" placeholder="Select a date" className="input input-bordered w-full max-w-xs" /> */}
    <input
  type="date"
  placeholder="Select a date"
  className="input input-bordered w-full max-w-xs"
  value={selectedDate}
  onChange={(e) => setSelectedDate(e.target.value)}
/>
    <div className="modal-action">
      <form method="dialog ">
        <div className="flex gap-7">
      {/* <button className="btn bg-green-500" type="submit" onClick={handleAddToCart}>Submit</button> */}
      <button
  className="btn bg-green-500" type="submit" onClick={() => handleAddToCart(selectedDate)}>Submit
</button>
        {/* if there is a button, it will close the modal */}
        <button className="btn bg-blue-400">Close</button>
        </div>
      </form>
    </div>
  </div>
</dialog>









            <button
              className="block w-full select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              READ
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DetailsBook;

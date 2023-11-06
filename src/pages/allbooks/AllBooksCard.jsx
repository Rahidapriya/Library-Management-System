/* eslint-disable react/prop-types */
import { MdProductionQuantityLimits } from 'react-icons/md';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const AllBooksCard = ({ book }) => {
  const {_id, name, category_name, author_name, photo, quantity, rating, desp } = book;

  const ratingChanged = (newRating) => {
    // Handle the rating change here
    console.log(newRating);
  };

  return (
    <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-base-300 bg-clip-border text-gray-700 shadow-md">
      <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
        <img src={photo} alt="image" className="object-cover  h-full" />
      </div>
      <div className="p-6">
        <div className='flex justify-between items-center'>
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-black uppercase">
            {category_name}
          </h6>
          <div className="flex items-center ">
            <MdProductionQuantityLimits className='text-3xl text-[#ff0000] font-bold'></MdProductionQuantityLimits>
            <p className="block mb-2 font-sans text-base antialiased  leading-relaxed text-gray-700 font-bold ">
              Quantity: {quantity}
            </p>
          </div>
        </div>
        <div className="block mb-2">
          <ReactStars
            count={5}
            value={parseInt(rating, 10)}// Pass the rating value here
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
        <h4 className="block mb-2 text-blue-400 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h4>
        <p className="block mb-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Author: {author_name}
        </p>
        <p className="block mb-2 mt-7 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          {desp}
        </p>
        <Link to={`../updatebooks/${_id}`}>
          <button
            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-[#ff0000] uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
           Update Book
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
          </Link>
     
      </div>
    </div>
  );
};

export default AllBooksCard;

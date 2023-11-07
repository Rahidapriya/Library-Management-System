/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BookCategoryCard = ({ card }) => {
//     <script>
//   AOS.init();
// </script>
    const { category_name, image, } = card;
    return (
      <div className=" bg-blue-400 my-3 rounded-md " >
        <div className="relative mx-4 mt-4 overflow-hidden text-black bg-blue-400 h-72 rounded-xl bg-clip-border">
          <img src={image} className="h-full" alt={category_name} />
        </div>
        <div className="p-6 pt-0 font-bold text-2xl text-center mt-2 text-black">
          {category_name}
        </div>
       <div className="mx-3 " ><Link to={`/allbooks/${category_name}`}> <button className="btn w-full py-4 my-4 mx-auto text-[#ff0000] hover:bg-[#ff0000] hover:text-white">See More</button></Link></div>
      </div>
    );
  };
  
  export default BookCategoryCard;
  
/* eslint-disable react/prop-types */

const BookCategoryCard = ({ card }) => {
//     <script>
//   AOS.init();
// </script>
    const {  name, image, } = card;
    return (
      <div className="w-96  bg-blue-400 my-3 rounded-md " >
        <div className="relative mx-4 mt-4 overflow-hidden text-black bg-blue-400 h-72 rounded-xl bg-clip-border">
          <img src={image} className="h-full" alt={name} />
        </div>
        <div className="p-6 pt-0 font-bold text-2xl text-center mt-2 text-black">
          {name}
        </div>
       <div className="mx-3 " > <button className="btn w-full py-4 my-4 mx-auto text-[#ff0000] hover:bg-[#ff0000] hover:text-white">See More</button></div>
      </div>
    );
  };
  
  export default BookCategoryCard;
  
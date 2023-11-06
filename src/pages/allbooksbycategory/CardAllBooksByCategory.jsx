import { Link } from "react-router-dom";


const CardAllBooksByCategory = ({book}) => {
   
    const {_id, name, category_name, author_name, photo, quantity, rating, desp } = book;
    return (
        <div>
      
        <div className="relative flex flex-col lg:flex-row w-full max-w-[48rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<div className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
<img
src={photo}
 alt="image"
 className="object-cover w-full h-full"
/>
</div>
<div></div>
<div className="p-6">
<h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
{name}
</h6>
<h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
Category:{category_name}
</h4>
<p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
 {author_name}
</p>
<p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
 Quantity:{quantity} 
</p>
<p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
 Rating:{rating}
</p>
<p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
 {desp}
</p>
<div className="inline-block">

<div className="flex lg:flex-none">
<Link to={`../detailsproduct/${_id}`}><button className="btn mx-5 ">Details</button></Link> 

</div>
</div>
</div>
</div>
   </div>
    );
};

export default CardAllBooksByCategory;


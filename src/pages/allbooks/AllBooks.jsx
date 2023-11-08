import { useLoaderData } from "react-router-dom";
import AllBooksCard from "./AllBooksCard";
import { useState } from "react";
import { BiFilterAlt } from 'react-icons/bi';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const AllBooks = () => {
  const allBooks = useLoaderData();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchOption, setSearchOption] = useState("name");
  const [filteredBooks, setFilteredBooks] = useState(allBooks);



  const filterByAvailability = () => {
    return filteredBooks.filter((book) => book.quantity > 0);
  };



  const handleFilterChange = (e) => {
    const filterOption = e.target.value;
    let filteredData;

    if (filterOption === "availability") {
      filteredData = filterByAvailability();
    }
    

    setFilteredBooks(filteredData);
  };

  return (
    <div>
        <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center mt-20" id="services">
        <h3 className="text-[#ff0000]">Choose your Books</h3>
        <h1 className="text-black text-2xl md:text-4xl font-metamorphous font-bold text-center mb-10">__All Books Collection__</h1>
      </div>
      <div className="relative mb-4 flex w-8/12 lg:w-4/12 md:w-1/2 flex-wrap justify-center items-stretch">
       
      </div>
     <div className="flex items-center justify-end gap-2 mb-10">
      
        <BiFilterAlt className="text-4xl text-[#ff0000] "></BiFilterAlt>
        <p>Filter:</p>
        <div className="relative flex w-8/12 lg:w-4/12 md:w-1/2 flex-wrap  items-stretch">
        <select
          onChange={handleFilterChange}
          className="block w-36 rounded border border-solid border-neutral-300 bg-white bg-clip-border px-2 py-2 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        >
          <option value="none">Filter by</option>
          <option value="availability">Availability</option>
          {/* <option value="rating">Rating (max to min)</option> */}
        </select>
      </div>
     </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5 my-5 gap-6">
          {filteredBooks.map((book) => (
            <AllBooksCard key={book._id} book={book} />
          ))}
        </div>
       
      </div>
     <Footer></Footer>
    </div>
  );
};


export default AllBooks;


// import { useState } from "react"; // Import useState
// import AllBooksCard from "./AllBooksCard";
// import { useLoaderData } from "react-router-dom";

// const AllBooks = () => {
//   const allBooks = useLoaderData();
//   const [searchTerm, setSearchTerm] = useState(""); // State variable for search input
//   const [filteredBooks, setFilteredBooks] = useState(allBooks); // State variable for filtered books

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     const searchValue = e.target.value;
//     setSearchTerm(searchValue);

//     // Filter books based on search input
//     const filtered = allBooks.filter((book) =>
//       book.name.toLowerCase().includes(searchValue.toLowerCase())
//     );

//     // Further filter to show only available books (quantity > 0)
//     const availableBooks = filtered.filter((book) => book.quantity > 0);

//     setFilteredBooks(availableBooks);
//   };

//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center mt-20" id="services">
//         <h3 className="text-[#ff0000]">Choose your Books</h3>
//         <h1 className="text-black text-2xl md:text-4xl font-metamorphous font-bold text-center">__All Books Collection__</h1>
//       </div>
//       {/* Search bar */}
//       <div className="relative mb-4 flex w-8/12  lg:w-4/12 md:w-1/2 flex-wrap justify-center items-stretch">
//         <input
//           id="searchInput"
//           type="text"
//           value={searchTerm}
//           onChange={handleSearchChange} // Handle search input change
//           className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto justify-center rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
//           placeholder="Search here"
//           aria-label="Search"
//         />
//         {/* ... Rest of your code ... */}
//       </div>
//       {/* Display filtered books */}
//       <div className="flex flex-col items-center">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-10 mx-5 lg:my-20 gap-6">
//           {filteredBooks.map((book) => (
//             <AllBooksCard key={book._id} book={book} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AllBooks;
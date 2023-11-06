import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Swal from "sweetalert2";
import formbook from '../../assets/addbookform.jpg'

const AddBook = () => {
//   const [selectedOption, setSelectedOption] = useState("");
//   const handleRadioChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

  const [category_name, setCategory_name] = useState("");
  const handleCategorySelectChange = (e) => {
    setCategory_name(e.target.value);
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const author_name = form.author_name.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const desp = form.desp.value;

    const newBook = {
        category_name,
      name,
      author_name,
      quantity,
      rating,
      desp,
      photo,
    };
    console.log(newBook);

    fetch("http://localhost:5005/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Book Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div>
      <div>
        <Navbar />
        <div>
          <div className="flex flex-col items-center justify-center mt-20 bg-[#D0EAE7] py-10 w-6/12 mx-auto" id="services">
          <img src={formbook} className="w-1/12" alt="" />
            <h3 className="text-black"> Add Your choosing Products</h3>
            <h1 className="text-[#ff0000] text-2xl md:text-4xl font-metamorphous font-bold text-center">
              __Add Book__
            </h1>
          </div>
          <div className="flex items-center justify-center p-12 w-6/12 mx-auto bg-blue-200">
            <div className="mx-auto w-full max-w-[550px] shadow-lg p-6 rounded-md">
              <form onSubmit={handleAddBook}>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Add the Book Image
                  </label>
                  <input
                    type="text"
                    name="photo"
                    id="photo"
                    placeholder="image_URL"
                    min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Add the Book Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Add the Author Name
                  </label>
                  <input
                    type="text"
                    name="author_name"
                    id="author_name"
                    placeholder="Author Name"
                    min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Book Category
                  </label>
                  <select
                    name="book_category"
                    id="book_category"
                    value={category_name}
                    onChange={handleCategorySelectChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                     <option value="">Select</option>
                    <option value="Novel">Novel</option>
                    <option value="History">History</option>
                    <option value="Drama">Drama</option>
                    <option value="Mystery">Mystery</option>
                   
                  </select>
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                       Quantity of the Book
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder="Quantity"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Add Book Rating
                      </label>
                      <input
                        type="number"
                        name="rating"
                        id="rating"
                        placeholder="Rating"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Add Short Description
                  </label>
                  <input
                    type="text"
                    name="desp"
                    id="desp"
                    placeholder="Description"
                    min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="hover:shadow-form rounded-md hover:bg-blue-400 py-3 px-8 text-center text-base font-semibold text-white outline-none w-full bg-[#ff0000]"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;

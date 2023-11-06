import  { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Swal from 'sweetalert2';

const UpdateBooks = () => {
    const book =useLoaderData();
    // const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

  // Use useEffect to handle the data loading and access it when it's available
  useEffect(() => {
    if (book) {
      console.log('Server-side data:', book);
      setIsLoading(false);
    }
  }, [book]);

  
    console.log('loader data',book);
    // console.log('update korchu');
    const navigate=useNavigate();
    const {_id,category_name, name,author_name,quantity,rating,desp,photo}=book;
        console.log('ager nam',book.name);
        // const [updateCategoryName,setUpdateCategoryName]=useState(book.category_name);
       
                   const [updateCategoryName, setUpdateCategoryName] = useState(category_name);
                 
                   const availableCategories = ['Novel', 'History', 'Drama', 'Mystery'];

        // const handleCategorySelectChange = (e) => {
        //     setUpdateCategoryName(e.target.value);
        //   };

          const handleUpdateBook=event=>{
            if (isLoading || !_id){
              return;
            }
          
            event.preventDefault();
            const form = event.target;
            const photo = form.photo.value;
            const name = form.name.value;
            const author_name = form.author_name.value;
            const quantity = form.quantity.value;
            const rating = form.rating.value;
            const desp = form.desp.value;

            const updatedBook={updateCategoryName,name,
                author_name,
                quantity,
                rating,
                desp,
                photo};
                
                fetch(`http://localhost:5005/books/${_id}`,{
                    method:'PUT',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(updatedBook)
                   })
                   .then(res=>res.json())
                   .then(data=>{
                    console.log(data);
                    if(data.modifiedCount>0){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Book Updated Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                          // navigate('/'); 
                          navigate('/'); 
                    }
                   })
                    // Define your available categories here
          }
    return (
        <div>
           {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <div>
          <Navbar />
          <div>
            <div className="flex flex-col items-center justify-center mt-20" id="services">
              <h3 className="text-amber-500"> Update Your Choosing Books</h3>
              <h1 className="text-purple-950 text-2xl md:text-4xl font-metamorphous font-bold text-center">
                __Update Book__
              </h1>
            </div>
            <div className="flex items-center justify-center p-12">
              <div className="mx-auto w-full max-w-[550px] shadow-lg p-6 rounded-md">
                <form onSubmit={handleUpdateBook}>
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Add the Book Image
                    </label>
                    <input
                      type="text"
                      name="photo"
                      id="photo"
                      defaultValue={photo}
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
                      defaultValue={name}
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
                      defaultValue={author_name}
                      placeholder="Author Name"
                      min="0"
                      className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  {/* <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Book Category
                    </label>
                    <select
  name="book_category"
  id="book_category"
  // value={category_name} // Set the default value based on the book's category_name
  onChange={handleCategorySelectChange}
  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
>
  <option value="">Select</option>
  <option value="Novel">Novel</option>
  <option value="History">History</option>
  <option value="Drama">Drama</option>
  <option value="Mystery">Mystery</option>
</select>
                  </div> */}
                   <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Book Category
                    </label>
                    <select
                      name="book_category"
                      id="book_category"
                      value={updateCategoryName}
                      onChange={(e) => setUpdateCategoryName(e.target.value)}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="">Select</option>
                      {availableCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
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
                          defaultValue={quantity}
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
                          defaultValue={rating}
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
                      defaultValue={desp}
                      placeholder="Description"
                      min="0"
                      className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="hover:shadow-form rounded-md hover:bg-[#ff0000] py-3 px-8 text-center text-base font-semibold text-white outline-none w-full bg-blue-500"
                    >
                       Update Book
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    );
};

export default UpdateBooks;
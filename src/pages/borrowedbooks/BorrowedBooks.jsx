import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BorrowedCard from "./BorrowedCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const BorrowedBooks = () => {
    const books= useLoaderData();
    const { user } = useContext(AuthContext);
  const [myBorrowedBooks, setMyBorrowedBooks] = useState( books);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    user &&
      user?.email &&
      setFilteredBooks(
        books.filter((book) => book.userEmail === user?.email)
      );
  }, [books,user]);

    if (books.length === 0) {
        return (
          <div>
            <Navbar></Navbar>
            {/* <AddSlider></AddSlider> */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2 className='text-center text-3xl font-bold'>You have not borrowed any book</h2>
    </div>
    <Footer></Footer>
          </div>
        );
      }
        return (
          <div>
          <Navbar></Navbar>
          <div className="flex flex-col lg:flex-row justify-between border-b pb-8 m-20">
            <h1 className="font-semibold text-2xl">Borrowed Books</h1>
            <h2 className="font-semibold text-2xl">{filteredBooks.length} Books</h2>
          </div>
          {filteredBooks.length > 0 ? ( 
            <div>
              <div className="grid lg:grid-cols-5 grid-cols-1 mx-20 my-10 gap-10">
                {filteredBooks.map((myBook) => (
                  <BorrowedCard
                    key={myBook._id}
                    myBook={myBook}
                    myBorrowedBooks={myBorrowedBooks}
                    setMyBorrowedBooks={setMyBorrowedBooks}
                  ></BorrowedCard>
                ))}
              </div>
              <Link to="/">
                <button className="flex font-semibold text-indigo-600 text-sm mt-10 m-10">
                  <svg
                    className="fill-current mr-2 text-indigo-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Borrow
                </button>
              </Link>
            </div>
          ) : (
            <div className="text-center m-10">
              <p>You Don't Have Borrowed Yet.</p>
            </div>
          )}
        </div>
        //     <div>
        //         <div>
        //   <Navbar></Navbar>
         
        //   <h2 className='text-center text-3xl m-10 font-bold'>Borrowed Books: {books.length}</h2>
    
        //   <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-11/12 mx-auto  my-16'>
        //     {books.map((book) => (
        //       <BorrowedCard key={book._id} book ={book}></BorrowedCard>
        //     ))
        // }
        //   </div>
        //   <Footer></Footer>
        // </div>
        //     </div>
    );
};

export default BorrowedBooks;
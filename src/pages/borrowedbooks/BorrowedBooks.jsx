import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BorrowedCard from "./BorrowedCard";


const BorrowedBooks = () => {
    const books= useLoaderData();
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
                <div>
          <Navbar></Navbar>
         
          <h2 className='text-center text-3xl m-10 font-bold'>Borrowed Books: {books.length}</h2>
    
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-11/12 mx-auto  my-16'>
            {books.map((book) => (
              <BorrowedCard key={book._id} book ={book}></BorrowedCard>
            ))
        }
          </div>
          <Footer></Footer>
        </div>
            </div>
    );
};

export default BorrowedBooks;
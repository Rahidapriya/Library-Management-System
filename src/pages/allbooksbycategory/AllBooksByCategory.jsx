import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import CardAllBooksByCategory from './cardAllBooksByCategory';

const AllBooksByCategory = () => {
    const books = useLoaderData();
  const { category_name } = useParams();
  console.log(books.length);
  console.log(books);
  if (books.length === 0) {
    return (
      <div>
        <Navbar></Navbar>
        {/* <AddSlider></AddSlider> */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
  <h2 className='text-center text-3xl font-bold'>No available products</h2>
</div>
<Footer></Footer>
      </div>
    );
  }
    return (
        <div>
            <div>
      <Navbar></Navbar>
     
      <h2 className='text-center text-3xl lg:m-10 font-bold'>Available Books: {books.length}</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-10 lg:mx-20 my-16'>
        {books.map((book) => (
          <CardAllBooksByCategory key={book._id} book ={book}></CardAllBooksByCategory>
        ))
    }
      </div>
      <Footer></Footer>
    </div>
        </div>
    );
};

export default AllBooksByCategory;